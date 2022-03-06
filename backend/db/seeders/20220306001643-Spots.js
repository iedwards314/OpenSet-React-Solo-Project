'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     {
       userId: 2,
       name: 'Beach House',
       address: '123 Fake Street',
       city: 'Miami',
       country: 'USA',
       price: 200,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      userId: 2,
      name: 'Horror House',
      address: '124 Fake Street',
      city: 'Fairvale',
      country: 'USA',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },     {
      userId: 2,
      name: 'Science Lab',
      address: '125 Fake Street',
      city: 'San Rafael',
      country: 'USA',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      name: 'Condo',
      address: '126 Fake Street',
      city: 'Philadelphia',
      country: 'USA',
      price: 175,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      name: 'Sail Boat',
      address: '127 Fake Street',
      city: 'Nantucket',
      country: 'USA',
      price: 220,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      name: 'Mega Yacht',
      address: '128 Fake Street',
      city: 'Honolulu',
      country: 'USA',
      price: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      name: 'House Boat',
      address: '129 Fake Street',
      city: 'Seattle',
      country: 'USA',
      price: 220,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      name: 'Cottage',
      address: '130 Fake Street',
      city: 'Forks',
      country: 'USA',
      price: 175,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      name: 'Farm',
      address: '131 Fake Street',
      city: 'Modesto',
      country: 'USA',
      price: 120,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
