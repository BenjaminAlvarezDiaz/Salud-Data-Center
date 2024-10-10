const { Product, Type, Category } = require ("../db.js");

//Crear projecto

async function createProducts (req, res) {
    const { TypeId, CategoryId} = req.body

    try {

    const newProductos = await Product.create({
        TypeId,
        CategoryId,
    })

    res.json(newProductos)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

const createType = async (req, res) => {
    const { marca, modelo, anio, precio, descripcion, ficha_tecnica, imagenes } = req.body

    try {

    const newTipo = await Type.create({
        marca,
        modelo,
        anio,
        precio,
        descripcion,
        ficha_tecnica,
        imagenes,
    })

    res.json(newTipo)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

async function createCategory (req, res) {
    const {type, name} = req.body

    try {

    const newCategoria = await Category.create({
        type,
        name,
    })

    res.json(newCategoria)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}




module.exports = {createProducts, createType, createCategory}