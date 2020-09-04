const router = require("express").Router();
const Article = require("../Models/Article.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        Error: err,
      });
    });
});

router.route("/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        Error: err,
      });
    });
});

module.exports = router;
