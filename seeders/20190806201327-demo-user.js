'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
        firstName: "Ryan",
        lastName: "Doty",
        email: "ryandoty1@outlook.com",
        password:  "workout",
        age: 23,
        weight: 205,
        timeFrame:8,
        daysPerWeek: 4,
        workoutLength: 60,
        experienceLevel: "Advanced",
        
      },{
        firstName: "Alez",
        lastName: "Steinberg",
        email: "asteinberg@outlook.com",
        password:  "workout",
        age: 26,
        weight: 170,
        timeFrame:12,
        daysPerWeek: 3,
        workoutLength: 45,
        experienceLevel: "Intermediate",
       
      },{
        firstName: "Antonio",
        lastName: "Guay",
        email: "aguay1@outlook.com",
        password:  "workout",
        age: 22,
        weight: 190,
        timeFrame:6,
        daysPerWeek: 5,
        workoutLength: 80,
        experienceLevel: "Beginner",
  
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
