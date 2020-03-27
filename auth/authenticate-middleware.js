/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

module.exports = authenticate;

function authenticate(req, res, next) {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization, "My Secret Key", (err) => {
      if (err) {
        res.status(404).json({ message: "Authorization invalid." });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
}
