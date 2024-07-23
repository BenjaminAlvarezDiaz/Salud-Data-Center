const { Categoria } = require ("../db.js");

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

module.exports = {createCategoria}