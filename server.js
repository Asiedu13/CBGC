const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
// const setUpPassport = require("./auth");
const path = require("path");

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

const articles = require("./Routes/Articles");
const users = require("./Routes/Users");
app.use("/api/articles", articles);
app.use("/api/users/articles", articles);

app.use("/api/users", users);

connectMongoDb();

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/public/index.html"));
});
 
// setUpPassport();

// app.use(express.static(path.resolve(__dirname, "client/public")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/client/build/public/index.html"));
// });
// try {
  app.listen(PORT, (err) => {
    console.log(`Server started on port: ${PORT}`);
  });
// } catch (err) {
  // console.log(`The error ${err}`);
// } finally {
  // app.listen(PORT, (err) => {

  //   console.log(`Server started on port: ${PORT}`);
  // });
// }
