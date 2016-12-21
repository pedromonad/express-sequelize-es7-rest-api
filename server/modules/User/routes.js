const UserCtrl = require('./controller');
const router = require('express').Router();
const validate = require ('express-validation');
const paramValidation = require('../../../config/param-validation');
const expressJwt = require('express-jwt');
const config = require('../../../config/env');
const jwtAuth = expressJwt({ secret: config.jwtSecret });

router.route('/')
  /** GET /api/users - Get list of users */
  .get(jwtAuth, UserCtrl.list)

  /** POST /api/users - Create new user */
  //validate(paramValidation.createUser),
  .post(UserCtrl.create);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(jwtAuth, UserCtrl.get)

  /** PUT /api/users/:userId - Update user */
  //validate(paramValidation.updateUser)
  .put(jwtAuth, UserCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(jwtAuth, UserCtrl.remove);

/** Load user when API with userId route parameter is hit */
//router.param('userId', UserCtrl.load);

export default router;
