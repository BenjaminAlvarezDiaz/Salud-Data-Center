const { Doctor } = require("../db.js");
//"Doctor" asi tiene que llamarse en el modelo correspondiente en la parte de '' en donde dice
// define

async function getDoctor(req, res) {
  try {
    console.log(req.query.id);
    console.log(Doctor);
    if (req.query.id) {
      const data = await getDoctorById(req.query.id);
      console.log('aaaaaa');
      if (data) {
        return res.json(data);
      } else {
        return res
          .status(404)
          .json({ message: "Nombre de la empresa no existe en db" });
      }
    }

    if (req.query.nombre) {
      const data = await getDoctorByName(req.query.nombre);
      if (data) {
        return res.json(data);
      } else {
        return res
          .status(404)
          .json({ message: "Nombre de la empresa no existe en db" });
      }
    }

    if (req.query.nombreusuario) {
      const data = await getDoctorByUsername(nombreusuario);
      if (data) {
        return res.json(data);
      } else {
        return res
          .status(404)
          .json({ message: "Nombre de la empresa no existe en db" });
      }
    }
    
    //Todos
    const doctors = await Doctor.findAll();
    return res.json(doctors);
  } catch (error) {
    console.error("Error al obtener los doctores:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getDoctorById(id) {
  try {
    console.log(id + "aaaaaaaaaaaa");
    const doctor = await Doctor.findByPk(id);

    if (doctor) {
      return doctor;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error al obtener el doctor por ID:", error);
    return "Error interno del servidor";
  }
}

async function getDoctorByName(name) {
  try {
    const doctor = await Doctor.findOne({ where: { name } });

    if (doctor) {
      return doctor;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error al obtener el doctor por nombre:", error);
    return "Error interno del servidor";
  }
}

async function getDoctorByUsername(userName) {
  try {
    const doctor = await Doctor.findOne({ where: { userName } });

    if (doctor) {
      return doctor;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error al obtener el doctor por nombre de usuario:", error);
    return "Error interno del servidor";
  }
}

async function verificarDoctorPorCredenciales(req, res) {
  try {
    const { matricula, contrasena } = req.body;
    console.log(matricula, contrasena);

    if (matricula && contrasena) {
      const doctor = await Doctor.findOne({ where: { matricula, contrasena } });

      if (doctor) {
        return res.json(doctor);
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
  getDoctor,
  getDoctorById,
  getDoctorByName,
  getDoctorByUsername,
  verificarDoctorPorCredenciales,
};
