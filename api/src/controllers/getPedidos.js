const { Order } = require("../db.js");

async function getOrders (req, res){
        if (req.query.id) {
            const Ordenes = await getOrderById(req.query.id);
            console.log('aaaaaa');
            if (Ordenes) {
                return res.json(Ordenes);
            } else {
                return res.status(404).json({ message: "ID del pedido no existe en db" });
            }
        }

        if(req.query.estadoPedido == 'paid'){
            const Ordenes = await getOrdersByStatus(req.query.estadoPedido);
            if (Ordenes){
                return res.json(Ordenes);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }

        if (req.query.estadoPedido == 'canceled'){
            const Ordenes = await getOrdersByStatus(req.query.estadoPedido);
            if (Ordenes){
                return res.json(Ordenes);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }
        if (req.query.estadoPedido == 'process'){
            const Ordenes = await getOrdersByStatus(req.query.estadoPedido);
            if (Ordenes){
                return res.json(Ordenes);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }

    try{
        const Ordenes = await Order.findAll();
        res.json(Ordenes);
    }   catch (error) {
        return res.status(500).json({ message: error.message });
    }   
}
const getOrderById = async (id) => {
    const Ordenes = await Order.findByPk({
      where: { id },
    });
    return Ordenes ? Ordenes : false;
}

const getOrdersByStatus = async (estadoPedido) => {
    const Ordenes = await Order.findAll({
      where: { estadoPedido },
    });
    return Ordenes ? Ordenes : false;
}


module.exports = {
    getOrders,
    getOrderById, 
    getOrdersByStatus, 
};