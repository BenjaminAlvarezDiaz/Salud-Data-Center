const { Router } = require('express');
const { getDoctor, verificarDoctorPorCredenciales } = require('../controllers/getDoctors');
const { CreateDoctors } = require('../controllers/postDoctors.js');
const { DeleteDoctors} = require('../controllers/deleteDoctors.js')
const{ updateDoctor } = require('../controllers/putDoctors.js')

const router = Router();

router.get("/getDoctor",getDoctor);
router.post("/search",verificarDoctorPorCredenciales);
router.post("/createDoctor", CreateDoctors);
router.delete("/deleteDoctor",DeleteDoctors);
router.put("/",updateDoctor);

module.exports = router;