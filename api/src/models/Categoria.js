const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
  });
};
