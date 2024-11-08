const { Router } = require('express');
const { getPatients } = require('../controllers/getPacientes.js');
const { postPatients } = require('../controllers/postPacientes.js');
const { deletePatients } = require('../controllers/deletePacientes.js');
const { updatePatients } = require('../controllers/putPacientes.js');


const router = Router();

router.get('/getPatients', getPatients);
router.post('/postPatients', postPatients);
router.delete('/', deletePatients);
router.put('/updatePatients', updatePatients);

module.exports = router;
