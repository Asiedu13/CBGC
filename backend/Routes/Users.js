const router = require("express").Router();
const Users = require("../Models/User.model");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    Users.findOne({ username }, function (err, user) {
      console.log(user.password == password);
      if (err) {
        return done(err);
      }
      if (!user) return done(null, false, { message: "Incorrect username" });
      console.log(user);
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      passport.serializeUser(function (user, done) {
        return done(null, user.id);
      });
      return done(null, user);
    });
  })
);

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

//--------------- Login user --------------
router.route("/login").post(function (req, res, next) {
  console.log(req.body.password)
  passport.authenticate("local", function (err, user, info) {
    console.log(user.password);
    if (err) return next(err);
    if (!user) {
      return res.json(info);
    }
    if (!user.password) return res.json({ msg: "invalid password" });
    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.json({ msg: "user found" });
    });
  })(req, res, next);
});

// ------------ Update user content ------------

// ----------- Delete user ----------------

//------------- Single user dashboard -------------
router.route("/me").get((req, res) => {
  res.json("I am me");
});

module.exports = router;
