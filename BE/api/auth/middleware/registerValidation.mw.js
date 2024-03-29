const UsersDB = require("../auth.model.js");
const regex = require("./regex.js");

module.exports = async (req, res, next) => {
  
  const errorMessages = [];

  for (const [key, value] of Object.entries(req.body)) {
    if (!value) errorMessages.push(`${key} field is missing it's value.`);

    if (key === "email") {
      const emailDuplicate = await UsersDB.getUserByEmail(value);
      if (!value) errorMessages.push("No email provided.");
      else if (!regex.emailRegEx.test(value))
        errorMessages.push("Please provide a valid email address.");
      if (emailDuplicate)
        errorMessages.push(
          "Email address is already being used. Please try another."
        );
    }

    if (key === "password") {
      if (!value) errorMessages.push("No password provided.");
      if (!regex.passwordRegEx.test(value))
        errorMessages.push(
          "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character."
        );
    }
  }

  if (errorMessages.length) return res.status(400).json({ errorMessages, MW: "registerValidation" });

  next();
};
