const { Router } = require('express');
const { getDoctor, verificarDoctorPorCredenciales } = require('../controllers/getDoctors');
const { createDoctors } = require('../controllers/postDoctors.js');
const { deleteDoctors} = require('../controllers/deleteDoctors.js')
const{ updateDoctor } = require('../controllers/putDoctors.js')

const router = Router();

router.get("/getDoctor",getDoctor);
router.post("/search",verificarDoctorPorCredenciales);
router.post("/createDoctor", createDoctors);
router.delete("/deleteDoctor", deleteDoctors);
router.put("/",updateDoctor);

module.exports = router;