const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('productos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};
