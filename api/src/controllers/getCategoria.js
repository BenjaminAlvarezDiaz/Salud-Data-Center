const { Category } = require("../db");

async function getCategory(req, res) {
    try {
      if (req.query.id) {
        const data = await getCategoryById(req.query.id);
        if (data) {
          return res.json(data);
        } else {
          return res
            .status(404)
            .json({ message: "Id de la categoria no existe en db" });
        }
      }
  
      if (req.query.nombre) {
        const data = await getCategoryByName(req.query.nombre);
        if (data) {
          return res.json(data);
        } else {
          return res
            .status(404)
            .json({ message: "Nombre de la categoria no existe en db" });
        }
    }
        const categorias = await Category.findAll();
        return res.status(200).json(categorias);
    } catch (error) {
        console.error("Error al obtener las categorias:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

async function getCategoryById(id) {
  try {
    const categoria = await Category.findByPk(id);
      
    if (categoria) {
      return categoria;
    } else {
      return false;
    }
    } catch (error) {
      console.error("Error al obtener la categoria por ID:", error);
      return "Error interno del servidor";
    }
}
      
async function getCategoryByName(name) {
  try {
    const categoria = await Category.findOne({ where: { name } });
      
    if (categoria) {
      return categoria;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error al obtener la categoria por nombre:", error);
    return "Error interno del servidor";
  }
}

module.exports = {
  getCategory,
  getCategoryById,
  getCategoryByName,
};