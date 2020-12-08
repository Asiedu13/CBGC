const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const domPurify = createDomPurify(new JSDOM().window);

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true, default: "Author" },
    time: { type: Date, default: Date.now },
    content: { type: String },
    likes: { type: Number, trim: true },
    haveRead: { type: Number, trim: true },
    img: { type: Schema.Types.Mixed },
    incomingComment: {type: String, trim: true},
    comment: {
      comments: {
        type: Array,
        trim: true,
      },
      madeAt: { type: Date, default: Date.now },
    },
  },
  { timeStamps: true }
).pre("validate", function() {
  this.comment['comments'].push(this.incomingComment);
});

const Articles = new mongoose.model("Articles", ArticleSchema, "articles");

module.exports = Articles;
