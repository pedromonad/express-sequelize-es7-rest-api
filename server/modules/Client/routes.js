const ClientCtrl = require('./controller');
const router = require('express').Router();
const validate = require ('express-validation');
const paramValidation = require('../../../config/param-validation');
const expressJwt = require('express-jwt');
const config = require('../../../config/env');
const jwtAuth = expressJwt({ secret: config.jwtSecret });

router.route('/')
  /** GET /api/clients - Get list of clients */
  .get(jwtAuth, ClientCtrl.list)

  /** POST /api/clients - Create new client */
  .post(jwtAuth, validate(paramValidation.createClient), ClientCtrl.create);

router.route('/:clientId')
  /** GET /api/clients/:clientId - Get client */
  .get(jwtAuth, ClientCtrl.get)

  /** PUT /api/clients/:clientId - Update client */
  .put(jwtAuth, validate(paramValidation.updateClient), ClientCtrl.update)

  /** DELETE /api/clients/:clientId - Delete client */
  .delete(jwtAuth, ClientCtrl.remove);


router.route('/:clientId/schedules')
  .post(jwtAuth, validate(paramValidation.createSchedule), ClientCtrl.createSchedule)

  .get(jwtAuth, ClientCtrl.getSchedulesByClientId);

router.route('/:clientId/schedules/:scheduleId')  
  .delete(jwtAuth, ClientCtrl.removeSchedule);


/** Load client when API with clientId route parameter is hit */
//router.param('clientId', ClientCtrl.load);

export default router;