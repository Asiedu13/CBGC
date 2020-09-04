const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, trim: true, required: true },
  author: { type: String, trim: true, default: "author" },
  date: new Date(),
  imgId: { type: Schema.Types.Mixed, trim: true, required: true },
});


const Article = mongoose.model(ArticleSchema, "articles");
module.exports = Article;