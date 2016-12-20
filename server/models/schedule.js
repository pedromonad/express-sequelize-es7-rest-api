'use strict';

function scheduleSchema(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
        title: DataTypes.STRING,
        start: DataTypes.DATE,
        end: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        models.Schedule.belongsTo(models.Client);
      }
    }
  });
  
  return Schedule;
}

export default scheduleSchema;