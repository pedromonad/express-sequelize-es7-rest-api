'use strict';
const bcrypt = require('bcrypt');

function userSchema(sequelize, DataTypes) {
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

  
  return User;
}

export default userSchema;
