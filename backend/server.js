const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const logger = require("morgan");

app.use(logger("short"));
app.use(cors());
app.use(express.json());
require("dotenv").config();
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

connectMongoDb();

// // Mail transporter
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 995,
// });

const articles = require("./Routes/Articles");
const users = require("./Routes/Users");
app.use("/api/users", users);
// app.use("/api/users/mail", users);
app.use("/api/articles", articles);
app.use("/api/users/articles", articles);


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
