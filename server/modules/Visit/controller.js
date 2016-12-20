'use strict';

const models = require('../../models/index');

/**
 * Load comments and append to req.
 */
async function getComments(req, res, next) {
    try {
        const data = await models.Visit.findAll();
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}

export { getComments };
