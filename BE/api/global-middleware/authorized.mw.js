const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../../config/secret.js");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    jwt.verify(authorization, JWTSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ Error: err });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided", MW: "Authorized" });
  }
};
