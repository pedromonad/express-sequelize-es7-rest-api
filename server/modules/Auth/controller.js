'use strict';
const jwt = require('jsonwebtoken');
const config = require('../../../config/env');
const models = require('../../models/index');
const bcrypt = require('bcrypt');

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
async function login(req, res, next) {
    try {
       
        const data = await models.User
                        .find({ where:{ username: req.body.username }});
     
        if(data != null && comparePassword(req.body.password, data.password) ) {
            const token = jwt.sign({ username: data.username }, config.jwtSecret);
            return res.json({ token, username: data.username });
        }
        
        return res.json({ success: false });

    } catch (err) {
        next(err);
    } 
}

function comparePassword(reqPassword, password) {
    return bcrypt.compareSync(reqPassword, password);
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}


export { login, getRandomNumber };
