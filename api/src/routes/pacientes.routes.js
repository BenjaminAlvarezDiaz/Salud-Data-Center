const { Router } = require('express');
const { getPatients } = require('../controllers/getPacientes.js');
const { postPatients } = require('../controllers/postPacientes.js');
const { deletePatients } = require('../controllers/deletePacientes.js');
const { updatePatients } = require('../controllers/putPacientes.js');


const router = Router();

router.post('/', getPatients);
router.get('/', postPatients);
router.delete('/', deletePatients);
router.put('/', updatePatients);

module.exports = router;
