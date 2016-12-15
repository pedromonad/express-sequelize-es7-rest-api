'use strict';

const models = require('../../models/index');

/**
* GET /
* @param req
* @param res
* @param next
*/
async function list(req, res, next) {
  try {
      const data = await models.User.findAll({});
      res.json({success: true, data});
  } catch (err) {
      next(err);
  }
}


/**
 * Get User
 * @returns {User}
 */
async function get(req, res, next) {
  try {
        const data = await models.User
                        .find({ where: { id: req.params.userId } });
        res.json({ data });
    } catch (err) {
        next(err);
    }
}


/**
 * Get User
 * @returns {User}
 */
async function load(req, res, next, id) {
    try {
        const data = await models.User
                        .find({ where: { id: req.params.userId } });
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Create new User
 * @property {string} req.body.username - The username of User.
 * @property {string} req.body.password - The password of User.
 * @returns {User}
*/
async function create(req, res, next) {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        };
        const data = await models.User.create(user);
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Update existing User
 * @property {string} req.body.username - The username of User.
 * @property {string} req.body.password - The password of User.
 * @returns {User}
 */
async function update(req, res, next) {
    try {
        const user = await models.User
                        .find({ where: { id: req.params.userId } });
        if(user){
            const data = await user
                            .updateAttributes({
                                username: req.body.username,
                                password: req.body.password
                            });
            res.json({success: true, data});
        }
    } catch (err) {
        next(err);
    }
}


/**
 * Deconste User.
 * @returns {User}
 */
async function remove(req, res, next) {
    try {
        const data = await models.User
                            .destroy({ where: { id: req.params.userId } });
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}

export { load, list, get, create, update, remove };
