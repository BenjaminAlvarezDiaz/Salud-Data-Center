const { Empresas } = require("../db");


async function DeleteEmpresas(req, res){

    //eliminar por id
    if (req.query.id) {
        const data = await DeleteEmpresasbyId(req.query.id);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por nombre
    if (req.query.name) {
        const data = await DeleteEmpresasByName(req.query.name);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    
    
}
const DeleteEmpresasbyId = async(id) => {
    const Empresa = await Empresas.destroy({

        where : { id},
    });
    return Empresa.length ? Empresa : false;
};

const DeleteEmpresasByName = async(name) => {
    const Empresa = await Empresas.destroy({

        where : { name },
    });
    return Empresa.length ? Empresa : false;
};



module.exports = { DeleteEmpresasByName, DeleteEmpresasbyId, DeleteEmpresas}; 


