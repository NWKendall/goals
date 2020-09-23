const UsersDB = require("../auth.model.js");
const regex = require("./regex.js");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
 
  const emailExist = await UsersDB.getUserByEmail(email);
  const errorMessages = [];

  let count = 0;

  if (!email) errorMessages.push("No email provided in request body.");

  count++;

  if (!regex.emailRegEx.test(email)) errorMessages.push("Not a valid email address.");

  count++;

  if (!password) errorMessages.push("No password provided in request body.");

  count++;

  if (!regex.passwordRegEx.test(password))
    errorMessages.push(
      "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character."
    );

  count++;

  if(errorMessages.length)
    return res.status(400).json({ errorMessages });
  else if (count === 4 && emailExist) 
    next()
  else return res.status(500).json({error: "Something went wrong"})
  
};
