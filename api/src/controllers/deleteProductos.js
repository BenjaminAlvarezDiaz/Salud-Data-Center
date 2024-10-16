const { Product } = require ('../db.js');

async function deleteProducts (req, res) {
    try {
        if(req.query.id){
            const data = await deleteProductById(req.query.id);
            console.log('eliminando producto por id');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del producto no existe en db" });
            }
        }

        if(req.query.marca){
            const data = await deleteProductByParam(req.query.marca);
            console.log('eliminando producto por marca');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del producto no existe en db" });
            }
        }

        if(req.query.modelo){
            const data = await deleteProductByParam(req.query.modelo);
            console.log('eliminando producto por modelo');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del producto no existe en db" });
            }
        }


    }catch (error) {
        console.error("Error al eliminar el producto:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

async function deleteProductById(id){
    const data = await Product.destroy({
        where : { id },
    });
    
    return data.length ? data : false;
}

async function deleteProductByParam(productData){
    const data = await Product.destroy({
        where : { productData },
    });
    
    return data.length ? data : false;
}

module.exports = {
    deleteProducts,
    deleteProductById,
    deleteProductByParam,
};