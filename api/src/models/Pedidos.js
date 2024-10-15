const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idCliente: {
            type: DataTypes.INTEGER,
        },
        idProducto: {
            type: DataTypes.INTEGER,
        },
        estadoPedido: {
            type: DataTypes.STRING,
        },
        total: {
            type: DataTypes.FLOAT,
        },
    },
    {
        timestamps: true,
    });
};