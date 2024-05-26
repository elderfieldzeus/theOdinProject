var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render('form', { title: "Message Form" });
});

router.post("/new", (req, res, next) => {
  const message = req.body.message;
  const user = req.body.user;

  if(message && user) {
    messages.push( {text: message, user: user, added: new Date()});
  }

  res.redirect("/");
})

module.exports = router;