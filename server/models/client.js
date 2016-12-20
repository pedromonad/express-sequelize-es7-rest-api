'use strict';

function clientSchema(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        rg: DataTypes.STRING,
        cpf: DataTypes.STRING,
        maritalStatus: DataTypes.STRING,
        sex: DataTypes.STRING,
        city: DataTypes.STRING,
        address: DataTypes.STRING,
        state: DataTypes.STRING,
        phone: DataTypes.STRING,
        facebook: DataTypes.STRING,
        email: DataTypes.STRING,
        birthday: DataTypes.STRING,
        info: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Client.hasMany(models.Visit);
      }
    }
  });
  
  return Client;
}

export default clientSchema;