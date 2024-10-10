const { Patient } = require("../db");


async function DeletePatients(req, res){

    //eliminar por Nombre
    if (req.query.Nombre) {
        const data = await DeletePatientsByName(req.query.Nombre);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por dni
    if (req.query.Dni) {
        const data = await DeletePatientsByDni(req.query.Dni);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
     //eliminar por apellido
    if (req.query.Apellido) {
      const data = await DeletePatientsBySurname(req.query.Apellido);
      if (data) {
        return res.json(data);
      } else {
        return res.status(404).json({ message: "No existe en la db" });
      }

      
  }

  //eliminar por id
  if (req.query.id) {
    const data = await DeletePatientsById(req.query.id);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }

    
}
}

async function DeletePatientsByDni (Dni) {
    const Paciente = await Patient.destroy({

        where : { Dni },
    });
    return Paciente.length ? Paciente : false;
};

const DeletePatientsByName = async(Nombre) => {
    const Paciente = await Patient.destroy({

        where : { Nombre },
    });
    return Paciente.length ? Paciente : false;
};

const DeletePatientsBySurname = async(Apellido) => {
  const Paciente = await Patient.destroy({

      where : { Apellido },
  });
  return Paciente.length ? Paciente : false;
};

const DeletePatientsById = async(id) => {
    const Paciente = await Patient.destroy({
  
        where : { id },
    });
    return Paciente.length ? Paciente : false;
  };

module.exports = { DeletePatients, 
    DeletePatientsByDni, DeletePatientsByName, DeletePatientsBySurname, DeletePatientsById}
