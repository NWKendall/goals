const UsersDB = require("../auth/auth.model.js");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailExist = await UsersDB.getUserByEmail(email);
  const errorMessages = [];

  let count = 0;

  if (!email) errorMessages.push("No email provided in request body.");

  count++;

  if (!emailRegEx.test(email)) errorMessages.push("Not a valid email address.");

  count++;

  if (!password) errorMessages.push("No password provided in request body.");

  count++;

  if (!passwordRegEx.test(password))
    errorMessages.push(
      "Password must contain: 8 characters minimum, one uppercase, one lowercase, 1 digit and 1 special character."
    );

  count++;

  if(errorMessages.length)
    return res.status(400).json({ errorMessages });
  else if (count === 4 && emailExist) 
    next()
  else return res.status(500).json(({ name, code, message, stack }))
  
};
