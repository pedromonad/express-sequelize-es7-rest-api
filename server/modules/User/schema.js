'use strict';


const bcrypt = require('bcrypt');

/**
 * User schema
 * @module User
 */

const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * List of users
 * @method list
 * @param filter Object with filter conditions
 * @param skip Number of rows skipped
 * @param limit Number of rows
 * @param sort Sort expression
 * @param select Field names to include, space separated
 * @return {Promise<any>}
 */
userSchema.statics.list = function(filter,
                               skip, limit,
                               sort, select) {
    try {

        let query = this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);    
        /*let query = User.find(filter);
        query.sort(sort);
        query.skip(skip);
        query.limit(limit);
        query.select(select);*/
        return query.exec();
    } catch (err) {
        return Promise.reject(err);
    }
};

/**
 * Get user
 * @param {ObjectId} id - The objectId of user.
 * @returns {Promise<User, Error>}
 */
userSchema.statics.get = function(id) {
    try {
        return this.findById(id)
                    .exec();
    } catch (err) {
        return Promise.reject(err);
    }
};


// Hash the user's password before inserting a new user
userSchema.pre('save', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Compare password input to password saved in database
userSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

export default userSchema;
