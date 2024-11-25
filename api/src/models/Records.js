const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('Record', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombrepaciente: {
        type: DataTypes.STRING,
      },
      dnipaciente: {
        type: DataTypes.INTEGER,
      },
      doctorasignado: {
        type: DataTypes.STRING,
      },
      fechaemision: {
        type: DataTypes.STRING,
      },
      razondevisita: {
        type: DataTypes.STRING,
      },
      tratamiento: {
        type: DataTypes.STRING,
      },
      indicaciones: {
        type: DataTypes.STRING,
      },
      suggestProduct: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
    }
  );
};