const router = require("express").Router();



function validationTest(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
};

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/main", validationTest, (req, res, next) => {
  res.render("main");
});


router.get("/private", validationTest, (req, res, next) => {
  res.render("private");
});


module.exports = router;
