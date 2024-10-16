const { Patient } = require("../db");


async function deletePatients(req, res){

    //eliminar por Nombre
    if (req.query.Nombre) {
        const data = await deletePatientsByName(req.query.Nombre);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por dni
    if (req.query.Dni) {
        const data = await deletePatientsByDni(req.query.Dni);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
     //eliminar por apellido
    if (req.query.Apellido) {
      const data = await deletePatientsBySurname(req.query.Apellido);
      if (data) {
        return res.json(data);
      } else {
        return res.status(404).json({ message: "No existe en la db" });
      }

      
  }

  //eliminar por id
  if (req.query.id) {
    const data = await deletePatientsById(req.query.id);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }
  }
  
}

async function deletePatientsByDni (Dni) {
    const Paciente = await Patient.destroy({

        where : { Dni },
    });
    return Paciente.length ? Paciente : false;
};

const deletePatientsByName = async(Nombre) => {
    const Paciente = await Patient.destroy({

        where : { Nombre },
    });
    return Paciente.length ? Paciente : false;
};

const deletePatientsBySurname = async(Apellido) => {
  const Paciente = await Patient.destroy({

      where : { Apellido },
  });
  return Paciente.length ? Paciente : false;
};

const deletePatientsById = async(id) => {
    const Paciente = await Patient.destroy({
  
        where : { id },
    });
    return Paciente.length ? Paciente : false;
  };

module.exports = { 
  deletePatients, 
  deletePatientsByDni, 
  deletePatientsByName, 
  deletePatientsBySurname, 
  deletePatientsById
};
