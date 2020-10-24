const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const marked = require("marked");
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
  },
  { timeStamps: true }
);

const Articles = new mongoose.model("Articles", ArticleSchema, "articles");

module.exports = Articles;
