const { Router } = require('express');
const { getAppointment } = require('../controllers/getCita.js');
const { createAppointment } = require('../controllers/postCitas.js');
const { deleteAppointment } = require('../controllers/deleteCitas.js');
const { updateAppointment } = require('../controllers/putCitas.js');

const router = Router();

router.get("/getAppointment", getAppointment);
router.post("/createAppointment", createAppointment);
router.delete("/deleteAppointment", deleteAppointment);
router.put("/updateAppointment", updateAppointment);

module.exports = router;