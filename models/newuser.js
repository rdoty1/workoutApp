'use strict';
module.exports = (sequelize, DataTypes) => {
  const NewUser = sequelize.define('NewUser', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    timeFrame: DataTypes.INTEGER,
    daysPerWeek: DataTypes.INTEGER,
    workoutLength: DataTypes.INTEGER,
    experienceLevel: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'beginTime',
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'beginTime',
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    timestamps: true,
  }, {});
  NewUser.associate = function(models) {
    // associations can be defined here
  };
  return NewUser;
};