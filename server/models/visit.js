'use strict';

function visitSchema(sequelize, DataTypes) {
  var Visit = sequelize.define('Visit', {
        description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Visit.belongsTo(models.Client);
      }
    }
  });
  
  return Visit;
}

export default visitSchema;