const { Order } = require("../db.js");

async function updateOrders(req, res){
    try {
        const orderId = req.query.id;

        const order = await Order.findByPk(orderId);

        if (order) {
            order.estadoPedido = req.body.estadoPedido;

            await order.save();
            
            return res.json({ message: 'Pedido actualizado correctamente', order });
        } else {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
    }catch (error) {
        console.error("Error al actualizar el pedido:", error);
        return res.status(500).json({ error: "Error interno del servidor al actualizar el pedido" });
    }
}

module.exports = {
    updateOrders,
};