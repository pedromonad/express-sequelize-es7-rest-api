'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
import config from '../../config/env';
var db        = {};


//if (config.use_env_variable) {
//  var sequelize = new Sequelize(process.env[config.use_env_variable]);
//} else {
  var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);
//}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
