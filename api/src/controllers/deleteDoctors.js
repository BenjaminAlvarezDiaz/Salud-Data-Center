const { Doctor } = require("../db");


async function deleteDoctors(req, res){

    //eliminar por id
    if (req.query.id) {
        const data = await deleteDoctorsById(req.query.id);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por nombre
    if (req.query.nombre) {
        const data = await deleteDoctorsByName(req.query.nombre);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    
    //eliminar por nombre de usuario
    if (req.query.nombreusuario) {
      const data = await deleteDoctorsByUsername(req.query.nombreusuario);
      if (data) {
        return res.json(data);
      } else {
        return res.status(404).json({ message: "No existe en la db" });
      }
  }

    
}
const deleteDoctorsById = async(id) => {
    const Doctores = await Doctor.destroy({

        where : { id},
    });
    return Doctores.length ? Doctores : false;
};

const deleteDoctorsByName = async(nombre) => {
    const Doctores = await Doctor.destroy({

        where : { nombre },
    });
    return Doctores.length ? Doctores : false;
};

const deleteDoctorsByUsername = async(nombreusuario) => {
  const Doctores = await Doctor.destroy({

      where : { nombreusuario },
  });
  return Doctores.length ? Doctores : false;
};

module.exports = { deleteDoctors, deleteDoctorsById, deleteDoctorsByName, deleteDoctorsByUsername}; 


