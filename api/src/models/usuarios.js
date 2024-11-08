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

      age: {
        type: DataTypes.INTEGER,
      },

      email: {
        type: DataTypes.STRING,
      },

      telefono: {
        type: DataTypes.STRING,
      },

      telefono2: {
        type: DataTypes.STRING,
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
      
      suggestProduct: {
        type: DataTypes.INTEGER,
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
