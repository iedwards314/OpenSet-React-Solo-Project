'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    mainImageURL: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.hasMany(models.Image, {foreignKey:'spotId', onDelete:'cascade', hooks: true});
    Spot.belongsTo(models.User, {foreignKey:'userId'});
    // Spot.hasMany(models.Review, {foreignKey: 'spotId', onDelete: 'cascade', hooks: true});
    Spot.belongsToMany(models.User, {
      through: 'Review',
      foreignKey: 'spotId',
      otherKey: 'userId',
      as: 'Reviews'
    })
  };
  return Spot;
};
