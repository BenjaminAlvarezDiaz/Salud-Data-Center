const { Order } = require("../db.js");

async function getOrders (req, res){
    try {
        
        console.log(req.query.id);
        
        if (req.query.id) {
            const data = await getOrderById(req.query.id);
            console.log('aaaaaa');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del pedido no existe en db" });
            }
        }

        if(req.query.estadoPedido == 'paid'){
            const data = await getOrdersByStatus(req.query.estadoPedido);
            if (data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }

        if (req.query.estadoPedido == 'canceled'){
            const data = await getOrdersByStatus(req.query.estadoPedido);
            if (data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }
        if (req.query.estadoPedido == 'process'){
            const data = await getOrdersByStatus(req.query.estadoPedido);
            if (data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }
    
    //Todos
    const pedidos = await Order.findAll();
    return res.json(pedidos);
  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getOrderById(id){
    try {
        const data = await Order.findByPk(id);
    
        if (data) {
          return data;
        } else {
          return false;
        }
    } catch (error) {
        console.error("Error al obtener el pedido por ID:", error);
        return "Error interno del servidor";
    }
}

async function getOrdersByStatus(status){
    try {
        const data = await Order.findOne({ where: { status } });
        if (data) {
                return data;
        } else {
                return false;
        }
    } catch (error) {
        console.error("Error al obtener el pedido por status:", error);
        return "Error interno del servidor";
    }
}

module.exports = {
    getOrders,
    getOrderById, 
    getOrdersByStatus
};