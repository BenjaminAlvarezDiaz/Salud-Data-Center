const { Pacientes } = require("../db.js");

async function GetPacientes(req, res) {
  //Por Nombre
  if (req.query.name) {
    const data = await GetPacientesByName(req.query.name);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }
  }

  //Por Apellido
  if (req.query.surname) {
    const data = await GetPacientesBySurname(req.query.surname);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }
  }

  //Todos
  try {
    const pacientes = await Pacientes.findAll();
    res.json(pacientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const GetPacientesByName = async (Nombre) => {
  const pacientes = await Pacientes.findAll({
    where: { Nombre },
  });

  return pacientes.length ? pacientes : false;
};

const GetPacientesBySurname = async (Apellido) => {
  const pacientes = await Pacientes.findOne({
    where: { Apellido },
  });

  return pacientes.length ? pacientes : false;
};

module.exports = { GetPacientes, GetPacientesByName, GetPacientesBySurname };
