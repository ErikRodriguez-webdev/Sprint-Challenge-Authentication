const router = require("express").Router();
const Users = require("./auth-model");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  const aUser = req.body;
  const hash = bcrypt.hashSync(aUser.password, 8);

  aUser.password = hash;

  Users.add(req.body).then((response) => {
    res
      .status(201)
      .json(response)
      .catch(() => {
        res.status(500).json({ message: "Error registering user." });
      });
  });
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
