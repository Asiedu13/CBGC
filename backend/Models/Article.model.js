const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const domPurify = createDomPurify(new JSDOM().window);

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true, default: "Author" },
    content: { type: String },
    likes: { type: Number, trim: true },
    comments: { type: Array },
    img: { type: Schema.Types.Mixed },
    published: Boolean,
    nOfViews: Number,
    nOfLikes: Number,
    nOfDislikes: Number,
    reports: Array,
    tags: Array,
    createdAt: { type: Date, default: Date.now },
    createdFromIp: Number,
    

  },
  { timeStamps: true }
);

const Articles = new mongoose.model("Articles", ArticleSchema, "articles");

module.exports = Articles;
