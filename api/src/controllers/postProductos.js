const { Product, Category } = require ("../db.js");

//Crear projecto

async function CreateProduct (req, res) {
    const { CategoriaId, marca, modelo, año, precio, descripcion, ficha_tecnica, imagenes } = req.body

    try {

    const newProduct = await Product.create({
        CategoriaId,
        marca,
        modelo,
        año,
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

async function createCategory (req, res) {
    const {type, name} = req.body

    try {

    const newCategoria = await Category.create({
        name,
    })

    res.json(newCategoria)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}




module.exports = {CreateProduct, createCategory}