const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('Doctor', {
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
      password: {
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