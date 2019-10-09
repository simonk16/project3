'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Teachers", [{
        firstName: "Vishu",
        lastName: "Guntupalli",
        username: "vishuG",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
        ClassId: 1,
        isStudent: false
      },
      {
        firstName: "Alec",
        lastName: "Down",
        username: "alecD",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
        ClassId: 2,
        isStudent: false
      }
    ])
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