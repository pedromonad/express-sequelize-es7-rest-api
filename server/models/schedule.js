'use strict';

function scheduleSchema(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
        title: DataTypes.STRING,
        clientId: DataTypes.INTEGER,
        start: DataTypes.DATE,
        end: DataTypes.DATE
  });
  
  return Schedule;
}

export default scheduleSchema;