'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("NewUsers", [{
        firstName: "Ryan",
        lastName: "Doty",
        email: "ryandoty1@outlook.com",
        age: 23,
        weight: 205,
        timeFrame:8,
        daysPerWeek: 4,
        workoutLength: 60,
        experienceLevel: "Advanced",
        
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
