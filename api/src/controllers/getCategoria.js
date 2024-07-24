const { Categoria } = require("../db");

async function getCategoria(req, res) {
    try {
      if (req.query.id) {
        const data = await getCategoriaById(req.query.id);
        if (data) {
          return res.json(data);
        } else {
          return res
            .status(404)
            .json({ message: "Id de la categoria no existe en db" });
        }
      }
  
      if (req.query.nombre) {
        const data = await getCategoriaByName(req.query.nombre);
        if (data) {
          return res.json(data);
        } else {
          return res
            .status(404)
            .json({ message: "Nombre de la categoria no existe en db" });
        }
    }
        const categorias = await Categoria.findAll();
        return res.status(200).json(categorias);
      } catch (error) {
        console.error("Error al obtener los doctores:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
      }
    }

    async function getCategoriaById(id) {
        try {
          const categoria = await Categoria.findByPk(id);
      
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
      
      async function getCategoriaByName(name) {
        try {
          const categoria = await Categoria.findOne({ where: { name } });
      
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
        getCategoria,
        getCategoriaById,
        getCategoriaByName,
                        }