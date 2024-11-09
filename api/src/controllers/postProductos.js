const { Product } = require ("../db.js");

//Crear projecto

async function postProduct (req, res) {
    const { CategoriaId, marca, modelo, anio, precio, descripcion, ficha_tecnica, imagenes } = req.body

    try {

    const newProduct = await Product.create({
        CategoriaId,
        marca,
        modelo,
        anio,
        precio,
        descripcion,
        ficha_tecnica,
        imagenes,
    })

    res.json(newProduct)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}


module.exports = {postProduct}