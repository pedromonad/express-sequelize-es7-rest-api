'use strict';
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.beforeCreate(function(model, options, cb) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(model.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          model.password = hash;
          return cb(null, options);
        });
      });
   
  });

  /*
  User.beforeCreate(function(model, options, cb) {
     bcrypt.compare(pw, model.password, function(err, isMatch) {
        if (err) {
          return cb(err);
        }
        cb(null, isMatch);
      });
  });*/
  
  return User;
};
