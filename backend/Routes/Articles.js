const router = require("express").Router();
const Articles = require("../Models/Article.model");

// Shortened string
function shorten(string, num) {
  let a = string.substring(0, num);
  return a;
}

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

// get article intros
// this takes in limit query parameter to indicate how many words in the content to retrieve

router.route("/short").get((req, res) => {
  Articles.find()
    .then((data) => {
      let modified = data.map((article) => {
        let content = shorten(article.content, req.query.limit);
        return {
          _id: article._id,
          author: article.author,
          imgId: article.imgId,
          title: article.title,
          content,
          likes: article.likes,
          haveRead: article.haveRead,
        };
      });
      res.json(modified).status(200);
    })
    .catch((err) => {
      res
        .json({
          msg: `Error occured in /summary
      ${err}`,
        })
        .status(404);
    });
});

// get single article intro
// this takes in limit query parameter to indicate how many words in the content to retrieve

router.route("/short/:id").get((req, res) => {
  Articles.findById(req.params.id)
    .then((data) => {
      let content = shorten(data.content, req.query.limit);
      let modified = {
        _id: data._id,
        author: data.author,
        imgId: data.imgId,
        title: data.title,
        content,
        likes: data.likes,
        haveRead: data.haveRead,
      };
      res.json(modified).status(200);
    })
    .catch((err) => {
      res.status(404).json({ msg: err });
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
  Articles.find()
    .skip(Number(req.params.num))
    .limit(3)
    .then((data) => {
      let modified = data.map((article) => {
        let content = shorten(article.content, 380);
        return {
          _id: article._id,
          author: article.author,
          imgId: article.imgId,
          title: article.title,
          content,
          likes: article.likes,
          haveRead: article.haveRead,
        };
      });
      res.json(modified).status(200);
    });
});

// Add a single article
router.route("/include").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const time = req.body.time;
  const likes = req.body.likes;
  const haveRead = req.body.haveRead;
  const img = req.body.img;
  const comment = req.body.incomingComment;

  const newArticle = new Articles({
    title,
    author,
    content,
    time,
    likes,
    haveRead,
    img,
    incomingComment: comment,
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

// Update single article content
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

// Commenting an article
router.route("/comment/:id").put((req, res) => {
  let incomingComment = req.body.incomingComment;
  Articles.findById(req.params.id, (err, article) => {
    article.incomingComment = incomingComment;

    article.save((err) => {
      if (err) return res.status(500).json("failed to update comments");
      res.status(201).json("Comments updated");
    });
  });
});
module.exports = router;
