const { Order } = require('../db.js');

async function postOrders(req, res) {
    const {
      idCliente,
      idProducto,
      estadoPedido,
      total,
      fecha,
    } = req.body;
    try {
      const NewOrder = await Order.create({
        idCliente,
        idProducto,
        estadoPedido,
        total,
        fecha,
      });
      console.log(NewOrder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
module.exports = {postOrders};