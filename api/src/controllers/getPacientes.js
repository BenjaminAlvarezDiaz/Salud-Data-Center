const { Patient } = require("../db.js");

async function GetPatients(req, res) {
  //Por Nombre
  if (req.query.name) {
    const data = await GetPatientsByName(req.query.name);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }
  }

  //Por Apellido
  if (req.query.surname) {
    const data = await GetPatientsBySurname(req.query.surname);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }
  }

  //Todos
  try {
    const pacientes = await Patient.findAll();
    res.json(pacientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const GetPatientsByName = async (Nombre) => {
  const pacientes = await Patient.findAll({
    where: { Nombre },
  });

  return pacientes.length ? pacientes : false;
};

const GetPatientsBySurname = async (Apellido) => {
  const pacientes = await Patient.findOne({
    where: { Apellido },
  });

  return pacientes.length ? pacientes : false;
};

module.exports = { GetPatients, GetPatientsByName, GetPatientsBySurname };
