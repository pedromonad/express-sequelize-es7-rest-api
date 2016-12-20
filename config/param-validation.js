const Joi = require('joi');
const validations = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  createSchedule: {
    body: {
      title: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/clients
  createClient: {
    body: {
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      rg: Joi.string().required(),
      cpf: Joi.string().required(),
      maritalStatus: Joi.string().required(),
      sex: Joi.string().required(),
      address: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      phone: Joi.string().required(),
      facebook:  Joi.string().required(),
      email:  Joi.string().required(),
      birthday: Joi.string().required(),
      info: Joi.string().required()
    }
  },

  // UPDATE /api/clients/:clientId
  updateClient: {
    body: {
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      rg: Joi.string().required(),
      cpf: Joi.string().required(),
      maritalStatus: Joi.string().required(),
      sex: Joi.string().required(),
      address: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      phone: Joi.string().required(),
      facebook:  Joi.string().required(),
      email:  Joi.string().required(),
      birthday: Joi.string().required(),
      info: Joi.string().required()
    },
    params: {
      clientId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};

export default validations;