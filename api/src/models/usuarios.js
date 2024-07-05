const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'pacientes',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      Nombre: {
        type: DataTypes.STRING,
      },

      Apellido: {
        type: DataTypes.STRING,
      },

      Dni: {
        type: DataTypes.INTEGER,
      },

      Email: {
        type: DataTypes.STRING,
      },

      Telefono: {
        type: DataTypes.INTEGER,
      },

      Telefono2: {
        type: DataTypes.INTEGER,
      },

      Sintomas: {
        type: DataTypes.STRING,
      },

      Tratamiento: {
        type: DataTypes.STRING,
      },

      Diagnostico: {
        type: DataTypes.STRING,
      },

      Exp_Medico: {
        type: DataTypes.STRING,
      },
    },

    {
      timestamps: false,
    }
  );
};
