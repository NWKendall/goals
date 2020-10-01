const router = require("express").Router();
const bcrypt = require("bcryptjs");
const UsersDB = require("./auth.model.js");
const generateToken = require("./generateToken.js");
const registerValidation = require("./middleware/registerValidation.mw.js");
const loginValidation = require("./middleware/loginValidation.mw.js");
const updateValidation = require("./middleware/credentialUpdateValidation.mw.js")

router.post("/register", registerValidation, (req, res) => {
  let { first_name, last_name, password, email } = req.body;
  let hash = bcrypt.hashSync(password, 12);
  password = hash;

  UsersDB.registerUser({ first_name, last_name, password, email })
    .then((user) => {
      res.status(201).json(user);
    })

    .catch(({ name, code, message, stack }) => {
      res.status41(500).json({ name, code, message, stack });
    });
});

router.post("/login", loginValidation, (req, res) => {
  let { email, password } = req.body;

  UsersDB.getUserByEmail(email)
    .then(async (user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.first_name}!`, token });
      } else {
        res.status(401).json({ error: "Invalid Credentials" });
      }
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/update/:id", updateValidation, (req, res) => {
  let id = parseInt(req.params.id);
  let hash = bcrypt.hashSync(req.body.password, 12);
  req.body.password = hash;
  let changes = { ...req.body };

  UsersDB.editUserCredentials(id, changes)
    .then((user) => {
      res
        .status(200)
        .json({ message: ` ${user.first_name}'s credentials updated.` });
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/user/:id", (req, res) => {
  let id = parseInt(req.params.id);
 
  UsersDB.deleteUser(id)
    .then(() => {
      res
        .status(200)
        .json({ message: `Account successfully removed.` });
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
