const router = require("express").Router();
const Users = require("../Models/User.model");

// ------------ Get all users ------------
router.route("/").get((req, res) => {
  Users.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ msg: "Couldn't fetch all users" });
    });
});

// ----------- Add user --------------

router.route("/include").post((req, res) => {
  let newUser = new Users({
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  });
  newUser
    .save()
    .then(() => {
      res.status(201).json({ msg: "ok" });
    })
    .catch((err) => {
      res.status(500).json({ msg: `Error: ${err}` });
    });
});

// ------------ Update user content ------------

// ----------- Delete user ----------------

module.exports = router;
