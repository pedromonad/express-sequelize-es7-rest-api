const VisitCtrl = require('./controller');
const router = require('express').Router();
const expressJwt = require('express-jwt');
const config = require('../../../config/env');
const jwtAuth = expressJwt({ secret: config.jwtSecret });

router.route('/')
  .get(jwtAuth, VisitCtrl.getComments);


export default router;