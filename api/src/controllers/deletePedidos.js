const { Order } = require("../db.js");

async function deleteOrders (req, res) {
    try {
        //eliminar por id
        if(req.query.id){
            const data = await deleteOrderById(req.query.id);
            console.log('aaaaaa');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del pedido no existe en db" });
            }
        }

        if(req.query.estadoPedido == 'paid'){
            const data = await deleteOrdersByStatus(req.query.estadoPedido);
            if (data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }
        
        if (req.query.estadoPedido == 'canceled'){
            const data = await deleteOrdersByStatus(req.query.estadoPedido);
            if (data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }
    
        /*if (req.query.estadoPedido == 'process'){
            const data = await deleteOrdersByStatus(req.query.estadoPedido);
            if (data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "Status no existe en la db"});
            }
        }*/

    } catch (error) {
        console.error("Error al eliminar el pedido:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }

}

async function deleteOrderById(id){
    const data = await Order.destroy({
        where : { id },
    });
    
    return data.length ? data : false;
}

async function deleteOrdersByStatus(status){
    const data = await Order.destroy({
        where : { status },
    });
    
    return data.length ? data : false;
}

module.exports = {
    deleteOrders,
    deleteOrderById, 
    deleteOrdersByStatus
};