const { Category } = require('../db.js');

async function postCategory (req, res) {
    const { type, name } = req.body

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

module.exports = {postCategory};