const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Company',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        nombreusuario: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        contact:{
           type: DataTypes.STRING
        },
        logo:{
            type : DataTypes.STRING
        },
        url:{
            type: DataTypes.STRING
        },
    },
    {
        timestamps: false
    });
}
