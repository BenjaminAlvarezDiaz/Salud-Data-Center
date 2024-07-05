const { Productos, Tipo, Categoria } = require ("../db.js");

//Crear projecto

const createProductos = async (req, res) => {
    const { TipoId, CategoriaId} = req.body

    try {

    const newProductos = await Productos.create({
        TipoId,
        CategoriaId,
    })

    res.json(newProductos)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

const createTipo = async (req, res) => {
    const { marca, modelo, anio, precio, descripcion, ficha_tecnica, imagenes } = req.body

    try {

    const newTipo = await Tipo.create({
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

const createCategoria = async (req, res) => {
    const {tipo, nombre} = req.body

    try {

    const newCategoria = await Categoria.create({
        tipo,
        nombre,
    })

    res.json(newCategoria)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}




module.exports = {createProductos, createTipo, createCategoria}