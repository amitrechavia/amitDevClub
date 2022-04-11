var express = require("express");
var router = express.Router();
const Blog = require("../models/blog.js");

router.get("/", function (req, res, next) {
  res.send("API is working properly");
  console.log(req.query);
  const blog = new Blog({
    idMovie: req.query.id,
  });
  blog
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

module.exports = router;
