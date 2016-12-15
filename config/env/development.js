export default {
  env: 'development',
  MONGOOSE_DEBUG: true,
  jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
  db: 'mongodb://localhost/express-mongoose-es7-rest-api-development',
  port: 4040,
  db: {
    username: 'postgres',
    password: '250494',
    database: 'express_sequelize_es7_rest_api',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres'
  }
};
