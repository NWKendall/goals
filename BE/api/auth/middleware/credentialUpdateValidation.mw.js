const UsersDB = require("../auth.model.js");
const regex = require("./regex.js");

module.exports = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = await UsersDB.getUserById(id);
  const { first_name, last_name, email, password } = req.body;
  req.body.id = id;
  // console.log("id", id, "USER", { user }, "PAYLOAD", { ...req.body });

  // if email !== user.email
  // if first !== user.first
  // if last !== user.last
  // password is encrypted, how to change that?
  //            current rout could be just for password
  // have different endpoints for email and details?

  if (user && req.body) {
    if (
      first_name === user.first_name &&
      last_name === user.last_name &&
      email === user.email
    )
      return res.status(400).json({
        errorMessage: "Please change at least one field.",
        MW: "updateValidation",
      });
    if (!first_name || first_name === "")
      return res.status(400).json({
        errorMessage: "No first name provided",
        MW: "updateValidation",
      });

    if (!last_name || last_name === "")
      return res.status(400).json({
        errorMessage: "No last name provided",
        MW: "updateValidation",
      });

    if (!email || email === "")
      return res
        .status(400)
        .json({ errorMessage: "No email provided", MW: "updateValidation" });

    if (email !== user.email) {
      const emailCheck = await UsersDB.getUserByEmail(email);
      if (emailCheck)
        return res.status(400).json({
          errorMessage: `${email} in use. Please choose another.`,
          MW: "updateValidation",
        });
    }

    if (!regex.emailRegEx.test(email))
      return res
        .status(400)
        .json({ errorMessage: "Invlaid email", MW: "updateValidation" });

    if (!password || password === "")
      return res
        .status(400)
        .json({ errorMessage: "No password provided", MW: "updateValidation" });

    if (!regex.passwordRegEx.test(password))
      return res.status(400).json({
        errorMessage:
          "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character.",
        MW: "updateValidation",
      });

    next();
  } else {
    return res.status(502).json({
      errorMessage: "ERRRRRRRRRRRRRRRRRROR",
      MW: "updateValidation",
    });
  }
};

// for (const [key, value] of Object.entries(req.body)) {
//   if (key === "first_name") {
//     if (value === user.first_name)
//       errorMessages.push("No changes to first name.");
//   }
//   if (key === "last_name") {
//     if (value === user.last_name)
//       errorMessages.push("No changes to last name.");
//   }
//   if (key === "email") {
//     if (!value || value === "") errorMessages.push("No email provided.");
//     else if (value === user.email) errorMessages.push("No changes to email");
//     else {
//       if (!regex.emailRegEx.test(value))
//         errorMessages.push("Please provide a valid email address.");

//       // check to make sure if email is different, not already used
//       const emailCheck = await UsersDB.getUserByEmail(value);
//       if (emailCheck)
//         res.status(400).json({
//           errorMessage: "Email already used, please choose another",
//           MW: "updateValidation",
//         });
//     }
//   }

//   if (key === "password") {
//     if (!value) errorMessages.push("No password provided.");
//     if (!regex.passwordRegEx.test(value))
//       errorMessages.push(
//         "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character."
//       );
//   }
// }

// if (errorMessages.length > 2)
//   return res.status(400).json({ errorMessages, MW: "updateValidation" });
