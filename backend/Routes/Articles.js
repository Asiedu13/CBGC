const router = require("express").Router();
const Articles = require("../Models/Article.model");

router.route("/").get((req, res) => {
  Articles.find()
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
  Articles.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        Error: err,
      });
    });
});

router.route("/include").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const time = req.body.time;
  const likes = req.body.likes;
  const haveRead = req.body.haveRead;

  const newArticle = new Articles({
    title,
    author,
    content,
    time,
    likes,
    haveRead,
  });

  newArticle
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(`error: ${err}`);
    });
});

module.exports = router;
