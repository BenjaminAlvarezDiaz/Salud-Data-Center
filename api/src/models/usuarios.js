const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Patient',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      nombre: {
        type: DataTypes.STRING,
      },

      apellido: {
        type: DataTypes.STRING,
      },

      dni: {
        type: DataTypes.INTEGER,
      },

      email: {
        type: DataTypes.STRING,
      },

      telefono: {
        type: DataTypes.INTEGER,
      },

      telefono2: {
        type: DataTypes.INTEGER,
      },

      sintomas: {
        type: DataTypes.STRING,
      },

      tratamiento: {
        type: DataTypes.STRING,
      },

      diagnostico: {
        type: DataTypes.STRING,
      },

      exp_Medico: {
        type: DataTypes.STRING,
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },

    {
      timestamps: false,
    }
  );
};
