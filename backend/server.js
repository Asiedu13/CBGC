const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const uri = process.env.URI;
app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connection = mongoose.connection;
connection.on("once", () => console.log("Connected successfully to db"));
connections.on("error", (err) => console.log(`Error: ${err}`));

const articles = require("./Routes/Articles");
app.use("/api/articles", articles);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
