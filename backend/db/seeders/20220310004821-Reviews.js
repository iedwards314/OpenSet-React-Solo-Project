"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 4,
          spotId: 2,
          review: "Very scary",
          rating: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          spotId: 3,
          review: "Perfect for a variety of sets",
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          spotId: 9,
          review: "It was okay",
          rating: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          spotId: 8,
          review: "it worked",
          rating: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          spotId: 9,
          review: "Exactly what we needed",
          rating: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          spotId: 4,
          review: "Surprisingly cheerful, loved the demolition and fire features",
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
