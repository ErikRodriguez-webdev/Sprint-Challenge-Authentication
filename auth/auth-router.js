const router = require("express").Router();
const Users = require("./auth-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  const aUser = req.body;
  const hash = bcrypt.hashSync(aUser.password, 8);

  aUser.password = hash;

  Users.add(req.body)
    .then((response) => {
      res.status(201).json({ ...response, password: "PRIVATE-INFORMATION" });
    })
    .catch(() => {
      res.status(500).json({ message: "Error registering user." });
    });
});

router.post("/login", (req, res) => {
  const aUser = req.body;

  Users.findByUser(aUser.username)
    .then((response) => {
      const theToken = jwt.sign(
        { subject: response.id, name: response.username },
        "My Secret Key",
        { expiresIn: "1h" }
      );

      if (
        aUser.username === response.username &&
        bcrypt.compareSync(aUser.password, response.password)
      ) {
        res.status(200).json({ ...response, token: theToken });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Error with logging user." });
    });
});

module.exports = router;
