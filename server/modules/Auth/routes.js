const AuthCtrl = require('./controller');
const router = require('express').Router();
const expressJwt = require('express-jwt');
const config = require('../../../config/env');


/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login').post(AuthCtrl.login);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/random-number').get(expressJwt({ secret: config.jwtSecret }), AuthCtrl.getRandomNumber);

export default router;