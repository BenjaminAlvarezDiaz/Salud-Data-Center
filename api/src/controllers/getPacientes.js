const { Patient } = require("../db.js");

async function getPatients(req, res) {
  //Por Nombre
  if (req.query.name) {
    const data = await getPatientsByName(req.query.name);
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "No existe en la db" });
    }
  }

  //Por Apellido
  if (req.query.surname) {
    const data = await getPatientsBySurname(req.query.surname);
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

const getPatientsByName = async (nombre) => {
  const pacientes = await Patient.findAll({
    where: { nombre },
  });

  return pacientes.length ? pacientes : false;
};

const getPatientsBySurname = async (apellido) => {
  const pacientes = await Patient.findAll({
    where: { apellido },
  });
  return pacientes ? pacientes : false;
};

module.exports = { getPatients, getPatientsByName, getPatientsBySurname };
