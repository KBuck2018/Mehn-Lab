var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

 module.exports = function(passport) {

    passport.serializeUser(function(user, callback) {
        callback(null, user.id)
      })    
      passport.deserializeUser(function(id, callback) {
        User.findById(id, function(err, user) {
            callback(err, user)
        })
      })
   passport.use('local-signup', new LocalStrategy({
     usernameField : 'userName',
     passwordField : 'password',
     passReqToCallback : true
   }, function(req, userName, password, callback) {
    User.findOne({ 'local.userName' :  userName }, function(err, user) {
        if (err) return callback(err);
  
        // If there already is a user with this userName
        if (user) {
      return callback(null, false, req.flash('signupMessage', 'This userName is already used.'));
        } else {
        // There is no userName registered with this site
      // Create a new user
      var newUser            = new User();
      newUser.local.userName    = userName;
      newUser.local.password = newUser.encrypt(password);
  
      newUser.save(function(err) {
        if (err) throw err;
        return callback(null, newUser);
      });
        }
      });
   }));
   passport.use('local-login', new LocalStrategy({
    usernameField : 'userName',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, userName, password, callback) {
     // Search for a user with this userName
     User.findOne({ 'local.userName' :  userName }, function(err, user) {
      if (err) {
        return callback(err);
      }

      // If no user is found
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No user found.'));
      }
      // Wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      }
      return callback(null, user);
    });
  }));
};