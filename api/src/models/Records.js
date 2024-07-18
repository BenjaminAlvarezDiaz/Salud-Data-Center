const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Records", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombrepaciente: {
        type: DataTypes.STRING,
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
    },
    {
      timestamps: true,
    }
  );
};