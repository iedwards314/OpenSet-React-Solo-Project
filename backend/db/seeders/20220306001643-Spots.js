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
       mainImageURL: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1610301586806-06e1c00cac1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGhvcnJvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      name: 'Science Lab',
      address: '125 Fake Street',
      city: 'San Rafael',
      country: 'USA',
      price: 300,
      mainImageURL: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1603275218135-07c03485bba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FpbGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1599774196150-af6236693157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVnYSUyMHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1614892370243-319d3aad772c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBib2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1601855392370-ce00f094f76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvdHRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
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
      mainImageURL: 'https://images.unsplash.com/photo-1600457008548-8a153e914616?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
