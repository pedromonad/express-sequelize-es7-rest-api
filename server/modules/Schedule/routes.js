const ScheduleCtrl = require('./controller');
const router = require('express').Router();
const expressJwt = require('express-jwt');
const config = require('../../../config/env');
const jwtAuth = expressJwt({ secret: config.jwtSecret });

router.route('/')
  .get(jwtAuth, ScheduleCtrl.getComments);


export default router;