const UsersDB = require("../auth/auth.model.js");
const regex = require("../../utils/regex.js");

module.exports = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = await UsersDB.getUserById(id);
  let errorMessages = [];

  // check to make sure changes and original are different
  for (const [key, value] of Object.entries(req.body)) {
    if (key === "first_name") {
      if (value === user.first_name)
        errorMessages.push("No changes to first name.");
    }
    if (key === "last_name") {
      if (value === user.last_name)
        errorMessages.push("No changes to last name.");
    }
    if (key === "email") {
      if (!value) errorMessages.push("No email provided.");
      else if (value === user.email) errorMessages.push("No changes to email");
      else {
        if (!regex.emailRegEx.test(value))
        errorMessages.push("Please provide a valid email address.");
        
        // check to make sure if email is different, not already used
        const emailCheck = await UsersDB.getUserByEmail(value);
        if (emailCheck)
          res.status(400).json({
            errorMessage: "Email already used, please choose another",
          });
      }
    }

    if (key === "password") {
      if (!value) errorMessages.push("No password provided.");
      if (!regex.passwordRegEx.test(value))
        errorMessages.push(
          "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character."
        );
    }
  }

  if (errorMessages.length > 2) return res.status(400).json({ errorMessages });

  next();
};
