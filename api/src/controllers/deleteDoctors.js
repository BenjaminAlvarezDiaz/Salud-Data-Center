const { Doctor } = require("../db");


async function DeleteDoctors(req, res){

    //eliminar por id
    if (req.query.id) {
        const data = await DeleteDoctorsById(req.query.id);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por nombre
    if (req.query.nombre) {
        const data = await DeleteDoctorsByName(req.query.nombre);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    
    //eliminar por nombre de usuario
    if (req.query.nombreusuario) {
      const data = await DeleteDoctorsByUsername(req.query.nombreusuario);
      if (data) {
        return res.json(data);
      } else {
        return res.status(404).json({ message: "No existe en la db" });
      }
  }

    
}
const DeleteDoctorsById = async(id) => {
    const Doctores = await Doctor.destroy({

        where : { id},
    });
    return Doctores.length ? Doctores : false;
};

const DeleteDoctorsByName = async(nombre) => {
    const Doctores = await Doctor.destroy({

        where : { nombre },
    });
    return Doctores.length ? Doctores : false;
};

const DeleteDoctorsByUsername = async(nombreusuario) => {
  const Doctores = await Doctor.destroy({

      where : { nombreusuario },
  });
  return Doctores.length ? Doctores : false;
};

module.exports = { DeleteDoctors, DeleteDoctorsById, DeleteDoctorsByName, DeleteDoctorsByUsername}; 


