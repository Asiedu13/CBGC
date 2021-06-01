const router = require("express").Router();
const Users = require("../Models/User.model");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// const mailjet = require("node-mailjet").connect(
//   "d19ff10670ba0da73fc4b377d15d36e3",
//   "c74b2d47f4a15dac141164f3111c940a"
// );
const mailjet = require("node-mailjet").connect(
  "5bce6dc2d9dd81aede4d7c116e695041",
  "1964780d5c9f1f69ba6ff5d649c24864"
);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash("info", "You must be logged in to see this page.");
    // res.json(res.redirect("/login"));
  }
}

// app.use(ensureAuthenticated());


// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     Users.findOne({ username }, function (err, user) {
//       console.log(user.password == password);
//       if (err) {
//         return done(err);
//       }
//       if (!user) return done(null, false, { message: "Incorrect username" });
//       console.log(user);
//       if (user.password !== password) {
//         return done(null, false, { message: "Incorrect password" });
//       }
//       passport.serializeUser(function (user, done) {
//         return done(null, user.id);
//       });
//       return done(null, user);
//     });
//   })
// );

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

router.route("/include", ).post(
  (req, res, next) => {
    // newUser
    //   .save()
    //   .then(() => {
    //     res.status(201).json({ msg: "ok" });
    //   })
    //   .catch((err) => {
    //     res.status(500).json({ msg: `Error: ${err}` });
    //   });

    let username = req.body.email;

    Users.findOne({ username: username }, function (err, user) {
      if (err) {
        return next(err);
      }
      if (user) {
        req.flash("error", "User already exists");
        // return res.redirect("/signup");
        return res.json({ msg: "1" });
      }
      let newUser = new Users({
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
      });
      newUser.save(next);
    });
  },
  passport.authenticate("local", {
    // successRedirect: "/",
    // failureRedirect: "/signup",
    failureFlash: true,
  }),
  (req, res) => {
    res.json({ msg: "0" });
  }
);

// });

//--------------- Login user --------------
router.route("/login").post(function (req, res, next) {
  console.log(req.body.password);
  passport.authenticate("local", function (err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.json(info);
    }
    if (!user.password) return res.json({ msg: "invalid password" });
    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.json({ msg: { msg: "user found", user: user._id } });
    });
  })(req, res, next);
});

// router.route("/login").post(
//   passport.authenticate("login", {
//     // successRedirect: "/",
//     // failureRedirect: "/login",
//     failureFlash: true,
//   }), (req, res)=> {
//     res.json({msg: "Success"})
//   }
// );

router.route("/logout").post(() => {
  router.get("/logout", function (req, res) {
    req.logout();
    // res.redirect("/");
    res.json("Logged out")
  });
});

// ------------ Update user content ------------

// ----------- Delete user ----------------

//------------- Single user dashboard -------------
router.route("/me").get((req, res) => {
  res.json("I am me");
});

// --------- Send Mail ------------
router.route("/mail").post((req, res) => {
  console.log(req.body.subject, req.body.mailbody);

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "princekofasiedu@gmail.com",
          Name: "Person",
        },
        To: [
          {
            Email: "clarksonsblog@gmail.com",
            Name: "Clarkson",
          },
        ],
        Subject: req.body.subject,
        TextPart: req.body.mailbody,
        CustomID: "RequestingHelpMail",
      },
    ],
  });
  request
    .then((result) => {
      res.status(200).json({ mailSent: "Mail Sent" });
    })
    .catch((err) => {
      res.status(500).json({ msg: err });
    });

  // const request = mailjet.post("send", { version: "v3.1" }).request({
  //   Messages: [
  //     {
  //       From: {
  //         Email: "clarksonsblog@gmail.com",
  //         Name: "CBGC",
  //       },
  //       To: [
  //         {
  //           Email: "princekofasiedu@gmail.com",
  //           Name: "Clarkson",
  //         },
  //       ],
  //       Subject: "Greetings from Prince",
  //       TextPart: "My first Mailjet email test",
  //       // HTMLPart:
  //       //   "<h3>Dear User, welcome to Clarksons! May the delivery force be with you!",
  //       CustomID: "AppGettingStartedTest",
  //     },
  //   ],
  // });
  // request
  //   .then((result) => {
  //     console.log(result.body);
  //   })
  //   .catch((err) => {
  //     console.log(err.statusCode);
  //   });
});

module.exports = router;
