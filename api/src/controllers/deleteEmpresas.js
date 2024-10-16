const { Company } = require("../db");


async function deleteCompanies(req, res){

    //eliminar por id
    if (req.query.id) {
        const data = await deleteCompaniesbyId(req.query.id);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por nombre
    if (req.query.name) {
        const data = await deleteCompaniesByName(req.query.name);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    
    
}
const deleteCompaniesbyId = async(id) => {
    const Empresa = await Company.destroy({

        where : { id},
    });
    return Empresa.length ? Empresa : false;
};

const deleteCompaniesByName = async(name) => {
    const Empresa = await Company.destroy({

        where : { name },
    });
    return Empresa.length ? Empresa : false;
};



module.exports = { deleteCompaniesByName, deleteCompaniesbyId, deleteCompanies}; 


