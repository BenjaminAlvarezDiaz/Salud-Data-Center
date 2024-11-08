const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
        type: DataTypes.STRING,
    },
    modelo: {
        type: DataTypes.STRING,
    },
    anio:{
        type:DataTypes.STRING,
    },
    precio: {
        type: DataTypes.FLOAT,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    ficha_tecnica: {
        type: DataTypes.STRING,
    },
    imagenes: {
        type: DataTypes.STRING,
    },
  },
    {
      timestamps: true,
    }
);
};
