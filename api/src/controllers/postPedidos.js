const { Order } = require('../db.js');

async function PostOrders(req, res) {
    const {
      idCliente,
      idProducto,
      estadoPedido,
      total,
    } = req.body;
    try {
      const NewOrder = await Order.create({
        idCliente,
        idProducto,
        estadoPedido,
        total,
      });
      console.log(NewOrder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
module.exports = {PostOrders};