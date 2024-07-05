const { Doctor } = require('../db.js');

async function PostDoctores(req, res) {
    const {
      matricula,
      nombreusuario,
      nombre,
      contrasena,
      email,
      dni

    } = req.body;
    try {
      const NewDoctor = await Doctor.create({
       matricula,
      nombreusuario,
      nombre,
      contrasena,
      email,
      dni
      });
      console.log(NewDoctor);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
module.exports = {PostDoctores};