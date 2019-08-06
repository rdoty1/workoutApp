'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NewUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      timeFrame: {
        type: Sequelize.INTEGER
      },
      daysPerWeek: {
        type: Sequelize.INTEGER
      },
      workoutLength: {
        type: Sequelize.INTEGER
      },
      experienceLevel: {
        type: Sequelize.STRING
      },
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
    });
  },
  // down: (queryInterface, Sequelize) => {
  //   return queryInterface.dropTable('NewUsers');
  // }
};