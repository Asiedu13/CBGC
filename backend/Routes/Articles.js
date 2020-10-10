const router = require("express").Router();
const Articles = require("../Models/Article.model");

// Display all articles
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

// get single article
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

// display 3 articles
router.route("/defined/:num").get((req, res) => {
  Articles.find().skip(2).limit(Number(req.params.num)).then((data) => {
    res.status(200).json(data);
  })
})

// Add a single article
router.route("/include").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const time = req.body.time;
  const likes = req.body.likes;
  const haveRead = req.body.haveRead;
  const img = req.body.img;

  const newArticle = new Articles({
    title,
    author,
    content,
    time,
    likes,
    haveRead,
    img,
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

// UPdate article content
router.route("/update/:id").put((req, res) => {
  Articles.findById(req.params.id, (err, article) => {
    if (err) res.send(err);

    article.title = req.body.title;
    article.author = req.body.author;
    article.content = req.body.content;
    article.time = req.body.time;
    article.likes = req.body.likes;
    article.haveRead = req.body.haveRead;
    article.img = req.body.img;

    article.save((err) => {
      if (err) res.send(err);
      res.json("Article updated");
    });
  });
});

// Delete Article
router.route("/delete/:id").delete((req, res) => {
  Articles.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json(`Removed: ${req.params.id}`);
    })
    .catch((err) => {
      res.status(500).json(`Error:${err}`);
    });
});

module.exports = router;
