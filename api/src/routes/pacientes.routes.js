const { Router } = require('express');
const { GetPatients } = require('../controllers/getPacientes.js');
const { PostPatients } = require('../controllers/postPacientes.js');
const { DeletePatients } = require('../controllers/deletePacientes.js');
const { updatePatients } = require('../controllers/putPacientes.js');


const router = Router();

router.post('/', GetPatients);
router.get('/', PostPatients);
router.delete('/', DeletePatients);
router.put('/', updatePatients);

module.exports = router;
