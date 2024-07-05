const { Router } = require('express');
const { getDoctor, verificarDoctorPorCredenciales } = require('../controllers/getDoctors');
const { CreateDoctors } = require('../controllers/postDoctors.js');
const { DeleteDoctors} = require('../controllers/deleteDoctors.js')
const{ updateDoctor } = require('../controllers/putDoctors.js')

const router = Router();

router.get("/",getDoctor);
router.post("/search",verificarDoctorPorCredenciales);
router.post("/", CreateDoctors);
router.delete("/",DeleteDoctors);
router.put("/",updateDoctor);

module.exports = router;