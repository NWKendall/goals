const router = require("express").Router();
const bcrypt = require("bcryptjs");
const UsersDB = require("./auth.model.js");
const generateToken = require("./generateToken.js");
const registerValidation = require("../middleware/loginValidation.js");
const loginValidation = require("../middleware/loginValidation.js");

router.post("/register", (req, res) => {
  let { first_name, last_name, password, email } = req.body;
  let hash = bcrypt.hashSync(password, 12);
  password = hash;

  UsersDB.registerUser({ first_name, last_name, password, email })
    .then((user) => {
      res.status(201).json(user);
    })

    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.post("/login", loginValidation, (req, res) => {
  let { email, password } = req.body;

  UsersDB.getUserByEmail(email)
    .then(async (user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        let roles = await UsersDB.getAllUserRoles(user.id);

        user.roles = roles.map((role) => role.name);
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

module.exports = router;
