const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('doctores', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      matricula: {
        type: DataTypes.STRING,
      },
      nombreusuario: {
        type: DataTypes.STRING,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      contrasena: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};