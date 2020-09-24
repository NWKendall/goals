const UsersDB = require("../auth.model.js");
const regex = require("./regex.js");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const emailExist = await UsersDB.getUserByEmail(email);
  const errorMessages = [];

  if (!email) errorMessages.push("No email provided in request body.");

  if (!regex.emailRegEx.test(email))
    errorMessages.push("Not a valid email address.");

  if (!password) errorMessages.push("No password provided in request body.");

  if (!regex.passwordRegEx.test(password))
    errorMessages.push(
      "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character."
    );

  if (errorMessages.length)
    return res.status(400).json({ errorMessages, MW: "loginValidation" });
  else if (!errorMessages.length && emailExist) next();
  else
    return res
      .status(500)
      .json({ error: "Something went wrong", MW: "loginValidation" });
};
