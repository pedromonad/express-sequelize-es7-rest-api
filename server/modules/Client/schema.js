'use strict';

/**
 * Client schema
 * @module Client
 */

const mongoose = require('mongoose');

let clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    comments: [{
        description: { type : String },
        createdAt: { type : Date, default : Date.now }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * List of clients
 * @method list
 * @param filter Object with filter conditions
 * @param skip Number of rows skipped
 * @param limit Number of rows
 * @param sort Sort expression
 * @param select Field names to include, space separated
 * @return {Promise<any>}
 */
clientSchema.statics.list = function(filter,
                               skip, limit,
                               sort, select) {
    try {

        let query = this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);    
        /*let query = Client.find(filter);
        query.sort(sort);
        query.skip(skip);
        query.limit(limit);
        query.select(select);*/
        return query.exec();
    } catch (err) {
        return Promise.reject(err);
    }
};

/**
 * Get client
 * @param {ObjectId} id - The objectId of client.
 * @returns {Promise<Client, Error>}
 */
clientSchema.statics.get = function(id) {
    try {
        return this.findById(id)
                    .exec();
    } catch (err) {
        return Promise.reject(err);
    }
};

export default clientSchema;
