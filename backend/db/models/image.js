'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.hasMany(models.Spot, {foreignKey:'spotId'})

  };
  return Image;
};
