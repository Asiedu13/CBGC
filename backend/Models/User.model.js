const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: { type: String, trim: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  readArticles: { type: Array },
  likedArticles: { type: Array },
  sharedArticles: { type: Array },
  dislikedArticles: { type: Array },
  booksBought: { type: Array },
  counsellingSessions: { type: Number },
  userImg: { type: Schema.Types.Mixed },
}).pre("validate", function () {
  
    this.username = this.email;
  
});

let Users = mongoose.model("Users", UserSchema, "users");
module.exports = Users;
