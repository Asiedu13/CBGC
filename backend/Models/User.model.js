const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const SALT_FACTOR = 10;

let UserSchema = new Schema({
  username: { type: String, trim: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: true, unique: true },
  dob: String,
  readArticles: { type: Array },
  likedArticles: { type: Array },
  savedArticles: {type: Array},
  dislikedArticles: { type: Array },
  sharedArticles: { type: Array },
  articleComments: {type: Array},
  Admin: String,
  lastSeen: Date,
  isActive: {type: Boolean},
  reportedArticles: {type: Array},
  counsellingSessions: { type: Number },
  userImg: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
})
function noop() {}
UserSchema.pre("save", function (done) {
  let user = this;
  user.username = user.email
  if (!user.isModified("password")) {
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return done(err);
    bcrypt.hash(user.password, salt, noop, function (err, hashedPassword) {
      if (err) return done(err);
      user.password = hashedPassword;
      done();
    });
  });
});

UserSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
  done(err, isMatch);
  });
 };


let Users = mongoose.model("Users", UserSchema, "users");
module.exports = Users;
