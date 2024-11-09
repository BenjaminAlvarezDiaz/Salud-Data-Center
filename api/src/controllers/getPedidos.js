const { Order } = require("../db.js");

async function getOrders (req, res){
        if (req.query.id) {
            const data = await getOrderById(req.query.id);
            console.log('aaaaaa');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del pedido no existe en db" });
            }
        }

        if(req.query.estadoPedido== 'paid'){
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

    try{
        const data = await Order.findAll();
        return res.json(data);
    }   catch (error) {
        return res.status(500).json({ message: error.message });
    }   
}
const getOrderById = async (id) => {
    const data = await Order.findByPk({
      where: { id },
    });
    return data ? data : false;
}

const getOrdersByStatus = async (estadoPedido) => {
    const data = await Order.findAll({
      where: { estadoPedido },
    });
    return data ? data : false;
}


module.exports = {
    getOrders,
    getOrderById, 
    getOrdersByStatus, 
};