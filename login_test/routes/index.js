var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

router.post('/login', passport.authenticate('local', {
  failureRedirect:'/'
}), (req,res)=>{
  res.redirect('/');
});

module.exports = router;
