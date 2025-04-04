const { Empresas } = require("../db");

async function updateEmpresa(req, res) {
  try {
    const EmpresasId = req.query.id;

    // Buscar el empresa por su ID
    const empresa = await Empresas.findByPk(EmpresasId);

    if (empresa) {
      empresa.name = req.body.name; 
      empresa.contact = req.body.contact; 
      empresa.logo = req.body.logo;
      empresa.url = req.body.url;  
   
      await empresa.save();

      return res.json({ message: 'empresa actualizado correctamente', empresa });
    } else {
      return res.status(404).json({ message: 'empresa no encontrado' });
    }
  } catch (error) {
    console.error("Error al actualizar el empresa:", error);
    return res.status(500).json({ error: "Error interno del servidor al actualizar el empresa" });
  }
}

module.exports = {
  updateEmpresa,
};
