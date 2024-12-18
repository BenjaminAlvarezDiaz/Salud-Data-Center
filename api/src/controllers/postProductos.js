const { Product } = require ("../db.js");

//Crear projecto

async function postProduct (req, res) {
    const { CategoriaId, name, marca, modelo, anio, precio, descripcion, ficha_tecnica, imagenes, stock, published, } = req.body

    try {

    const newProduct = await Product.create({
        CategoriaId,
        name,
        marca,
        modelo,
        anio,
        precio,
        descripcion,
        ficha_tecnica,
        imagenes,
        stock,
        published,
    })

    res.json(newProduct)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}


module.exports = {postProduct}