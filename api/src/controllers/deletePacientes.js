const { Pacientes } = require("../db");


async function DeletePacientes(req, res){

    //eliminar por Nombre
    if (req.query.Nombre) {
        const data = await DeletePacientesByName(req.query.Nombre);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
    //eliminar por dni
    if (req.query.Dni) {
        const data = await DeletePacientesByDni(req.query.Dni);
        if (data) {
          return res.json(data);
        } else {
          return res.status(404).json({ message: "No existe en la db" });
        }
    }
     //eliminar por apellido
    if (req.query.Apellido) {
      const data = await DeletePacientesBySurname(req.query.Apellido);
      if (data) {
        return res.json(data);
      } else {
        return res.status(404).json({ message: "No existe en la db" });
      }

      
  }

  //eliminar por id
  if (req.query.id) {
    const data = await DeletePacientesById(req.query.id);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }

    
}
}

const DeletePacientesByDni = async(Dni) => {
    const Paciente = await Pacientes.destroy({

        where : { Dni},
    });
    return Paciente.length ? Paciente : false;
};

const DeletePacientesByName = async(Nombre) => {
    const Paciente = await Pacientes.destroy({

        where : { Nombre },
    });
    return Paciente.length ? Paciente : false;
};

const DeletePacientesBySurname = async(Apellido) => {
  const Paciente = await Pacientes.destroy({

      where : { Apellido },
  });
  return Paciente.length ? Paciente : false;
};

const DeletePacientesById = async(id) => {
    const Paciente = await Pacientes.destroy({
  
        where : { id },
    });
    return Paciente.length ? Paciente : false;
  };

module.exports = { DeletePacientes, 
    DeletePacientesByDni, DeletePacientesByName, DeletePacientesBySurname, DeletePacientesById}
