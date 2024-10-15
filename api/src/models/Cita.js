const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Appointment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idCliente: {
            type: DataTypes.INTEGER,
        },
        idDoctor: {
            type: DataTypes.INTEGER,
        },
        fechaAtencion: {
            type: DataTypes.DATE,
        },
        inicioAtencion: {
            type: DataTypes.DATE,
        },
        finAtencion: {
            type: DataTypes.DATE,
        },
        estadoCita: {
            type: DataTypes.STRING,
        },

       },
      {
        timestamps: true,
      }
    );
};
