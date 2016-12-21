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
         const data = await models.Client.findAll({});
         res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Get client
 * @returns {Client}
 */
async function get(req, res, next) {
  try {
        const data = await models.Client
                        .find({ where: { id: req.params.clientId } });
        res.json({ data });
    } catch (err) {
        next(err);
    }
}


/**
 * Get client
 * @returns {Client}
 */
async function load(req, res, next, id) {
    try {
        const data = await models.Client
                        .find({ where: { id: req.params.clientId } });
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Create new client
 * @property {string} req.body.name - The name of client.
 * @property {string} req.body.lastName - The lastName of client.
 * @property {string} req.body.rg - The rg of client.
 * @property {string} req.body.cpf - The cpf of client.
 * @property {string} req.body.maritalStatus - The maritalStatus of client.
 * @property {string} req.body.sex - The sex of client.
 * @property {string} req.body.address - The address of client.
 * @property {string} req.body.city - The city of client.
 * @property {string} req.body.state - The state of client.
 * @property {string} req.body.phone - The phone of client.
 * @property {string} req.body.facebook - The facebook of client.
 * @property {string} req.body.email - The email of client.
 * @property {string} req.body.birthday - The birthday of client.
 * @property {string} req.body.info - The info of client.
 * @returns {Client}
*/
async function create(req, res, next) {
    try {
        const client = {
            name: req.body.name,
            lastName: req.body.lastName,
            rg: req.body.rg,
            cpf: req.body.name,
            maritalStatus: req.body.maritalStatus,
            sex: req.body.sex,
            address: req.body.address,
            city: req.body.name,
            state: req.body.state,
            phone: req.body.phone,
            facebook: req.body.facebook,
            email: req.body.email,
            birthday: req.body.birthday,
            info: req.body.info
        };
        const data = await models.Client.create(client);
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Update existing client
 * @property {string} req.body.name - The name of client.
 * @property {string} req.body.lastName - The lastName of client.
 * @property {string} req.body.rg - The rg of client.
 * @property {string} req.body.cpf - The cpf of client.
 * @property {string} req.body.maritalStatus - The maritalStatus of client.
 * @property {string} req.body.sex - The sex of client.
 * @property {string} req.body.address - The address of client.
 * @property {string} req.body.city - The city of client.
 * @property {string} req.body.state - The state of client.
 * @property {string} req.body.phone - The phone of client.
 * @property {string} req.body.facebook - The facebook of client.
 * @property {string} req.body.email - The email of client.
 * @property {string} req.body.birthday - The birthday of client.
 * @property {string} req.body.info - The info of client.
 * @returns {Client}
 */
async function update(req, res, next) {
    try {
        const client = await models.Client
                        .find({ where: { id: req.params.clientId } });
        if(client){
            const data = await client
                            .updateAttributes({
                                name : req.body.name,
                                lastName : req.body.lastName,
                                rg : req.body.rg,
                                cpf : req.body.cpf,
                                maritalStatus : req.body.maritalStatus,
                                sex : req.body.sex,
                                city : req.body.city,
                                state : req.body.state,
                                phone : req.body.phone,
                                facebook : req.body.facebook,
                                email : req.body.email,
                                birthday : req.body.birthday,
                                info : req.body.info
                            });
            res.json({success: true, data});
        }
    } catch (err) {
        next(err);
    }
}


/**
 * Delete client.
 * @returns {Client}
 */
async function remove(req, res, next) {
    try {
        const data = await models.Client
                            .destroy({ where: { id: req.params.clientId } });
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Load schedules and append to req.
 */
async function getSchedulesByClientId(req, res, next) {
    try {
        const data = await models.Schedule
                        .findAll({ where: { clientId: req.params.clientId } });
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}


/**
 * Create new schedule
 * @property {string} req.body.description - The schedule description of client.
 * @returns {Client}
 */
async function createSchedule(req, res, next) {
    try {
        const schedule = {
            title: req.body.title,
            clientId: req.params.clientId,
            start: req.body.start,
            end: req.body.end
        };
        
        const data = await models.Schedule.create(schedule);
        res.json({success: true, data });
    } catch (err) {
        next(err);
    }
}


/**
 * Delete schedule.
 * @returns {Schedule}
 */
async function removeSchedule(req, res, next) {
    try {
        const data = await models.Schedule
                            .destroy({ where: { id: req.params.scheduleId } });
        res.json({success: true, data});
    } catch (err) {
        next(err);
    }
}



export { load, list, get, create, update, remove, removeSchedule, createSchedule, getSchedulesByClientId };
