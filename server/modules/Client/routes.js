const ClientCtrl = require('./controller');
const router = require('express').Router();
const validate = require ('express-validation');
const paramValidation = require('../../../config/param-validation');
const expressJwt = require('express-jwt');
const config = require('../../../config/env');
const jwtAuth = expressJwt({ secret: config.jwtSecret });

router.route('/')
  /** GET /api/clients - Get list of clients */
  .get(ClientCtrl.list)

  /** POST /api/clients - Create new client */
  .post(validate(paramValidation.createClient), 
      ClientCtrl.create);

router.route('/:clientId')
  /** GET /api/clients/:clientId - Get client */
  .get(ClientCtrl.get)

  /** PUT /api/clients/:clientId - Update client */
  .put(
      validate(paramValidation.updateClient), 
      ClientCtrl.update)

  /** DELETE /api/clients/:clientId - Delete client */
  .delete(ClientCtrl.remove);


router.route('/:clientId/comments')
  .post(
       validate(paramValidation.createComment),
       ClientCtrl.createComment)

  .get(ClientCtrl.getComments);

router.route('/:clientId/comments/:commentId')  
  .delete(ClientCtrl.removeComment);


/** Load client when API with clientId route parameter is hit */
//router.param('clientId', ClientCtrl.load);

export default router;