const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')

router.get('/', (req, res) => {
  res.render('index')
})

// GET /signup
router.get('/signup', (req, res) => {
    res.render('userViews/signup', {message: req.flash("signupMessage")})
  })
  
  // POST /signup
  router.post('/signup', (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/repolinks',
      failureRedirect : '/user/signup',
      failureFlash : true
    });
  
    return signupStrategy(req, res);
  })
  
  // GET /login
  router.get('/login', (req, res) => {
    res.render('userViews/login', { message: req.flash('loginMessage') })
  })

  // POST /login
router.post('/login', (req, res) => {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '../repolinks',
      failureRedirect : '/user/login',
      failureFlash : true
    });
  
    return loginProperty(req, res);
  })

  // GET /logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

  module.exports = router

