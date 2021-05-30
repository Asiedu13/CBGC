const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const logger = require("morgan");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const setUpPassport = require('./passport');

app.use(logger("short"));
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use(cookieParser());
app.use(session({
 secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX", 
 resave: true, 
 saveUninitialized: true 
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, 'client/build')))
const uri = process.env.db_URI;
let connection = mongoose.connection;

let connectMongoDb = async () => {
  try {
    mongoose
      .connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => {
        console.log(`Failed to connect to database: ${err}`);
      });
    connection.once("open", () => console.log("Connected successfully to db"));
    connection.on("error", (err) => console.log(`Error: ${err}`));
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

connectMongoDb();

setUpPassport();


const articles = require("./Routes/Articles");
const users = require("./Routes/Users");
app.use("/api/articles", articles);
app.use("/api/users/articles", articles);

app.use("/api/users", users);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
 next();
} else {
  req.flash("info", "You must be logged in to see this page.");
  // res.json(res.redirect("/login"));
}
}

app.use(ensureAuthenticated);


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
