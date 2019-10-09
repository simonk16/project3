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
    return queryInterface.bulkInsert('Students', [{
        firstName: 'Simon',
        lastName: 'Kraus',
        points: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        ClassId: 1,
        isStudent: true
      },
      {
        firstName: 'Ben',
        lastName: 'Flippen',
        points: 69,
        createdAt: new Date(),
        updatedAt: new Date(),
        ClassId: 1,
        isStudent: true
      },
      {
        firstName: 'Rachel',
        lastName: 'Givens',
        points: 69,
        createdAt: new Date(),
        updatedAt: new Date(),
        ClassId: 1,
        isStudent: true
      },
      {
        firstName: 'Rachel',
        lastName: 'Harrison',
        points: 69,
        createdAt: new Date(),
        updatedAt: new Date(),
        ClassId: 1,
        isStudent: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};