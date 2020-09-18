const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true, default: "Author" },
    time: { type: Date },
    content: { type: String },
    likes: { type: Number, trim: true },
    haveRead: { type: Number, trim: true },
    img: { type: Schema.Types.Mixed },
  },
  { timeStamps: true }
);

const Articles = new mongoose.model("Articles", ArticleSchema, "articles");
module.exports = Articles;
