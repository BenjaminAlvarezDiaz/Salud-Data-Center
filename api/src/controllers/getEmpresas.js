const { Company } = require("../db.js");
const { Doctor } = require("../db.js");

//Consultar Empresas

async function getCompany(req, res) {
  // ????name   localhost:4000/empresas?name=gustavo

  if (req.query.name) {
    console.log(req.query.name); //gustavo
    const data = await getCompaniesByName(req.query.name); //empresa o un false
    if (data) {
      return res.json(data);
    } else {
      return res
        .status(404)
        .json({ message: "Nombre de la empresa no existe en db" });
    }
  }

  if (req.query.id) {
    console.log(req.query.id); //id = 6
    const data = await getCompaniesById(req.query.id); //empresa o un false
    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ message: "El id no existe en db" });
    }
  }

  if (req.query.nombreusuario && req.query.contrasena) {
    const nombreusuario = req.query.nombreusuario;
    const contrasena = req.query.contrasena;

    const empresaData = await authenticateCompany(nombreusuario, contrasena);

    if (empresaData) {
      return res.json({ empresaData, tipo: "empresa" });
    } else {
      const doctorData = await authenticateDoctor(nombreusuario, contrasena);

      if (doctorData) {
        return res.json({ doctorData, tipo: "doctor" });
      } else {
        return res
          .status(404)
          .json({ message: "No se ha encontrado tu usuario" });
      }
    }
  }
  try {
    const empresas = await Company.findAll();
    res.json(empresas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Consultar Empresas(name)

const getCompaniesByName = async (name) => {
  const empresas = await Company.findAll({
    where: {
      name,
    },
  });
  return empresas.length ? empresas : false;
};

const authenticateCompany = async (nombreusuario, contrasena) => {
  const empresa = await Company.findOne({
    where: {
      nombreusuario,
      contrasena,
    },
  });
  return empresa ? empresa : null;
};

const authenticateDoctor = async (nombreusuario, contrasena) => {
  const doctor = await Doctor.findOne({
    where: {
      nombreusuario,
      contrasena,
    },
  });
  return doctor ? doctor : null;
};

const getCompaniesById = async (id) => {
  const empresas = await Company.findAll({
    where: {
      id,
    },
  });
  return empresas.length ? empresas : false;
};

async function verificarEmpresaPorCredenciales(req, res) {
  try {
    const { name, contrasena } = req.body;
    console.log(name, contrasena);

    if (name && contrasena) {
      const empresas = await Company.findOne({ where: { name, contrasena } });

      if (empresas) {
        return res.json(empresas);
      } else {
        return res.status(404).json({ message: "Credenciales de doctor no válidas" });
      }
    } else {
      return res.status(400).json({ message: "Matricula y contraseña son obligatorias" });
    }
  } catch (error) {
    console.error("Error al verificar el doctor por credenciales:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  getCompany,
  getCompaniesByName,
  getCompaniesById,
  authenticateDoctor,
  authenticateCompany,
  verificarEmpresaPorCredenciales,
};
