const { Router } = require('express');
const { GetPacientes } = require('../controllers/getPacientes.js');
const {  PostPacientes} = require('../controllers/postPacientes.js');
const { DeletePacientes } = require('../controllers/deletePacientes.js');
const { updatePacientes } = require('../controllers/putPacientes.js');


const router = Router();

router.post('/', PostPacientes);
router.get('/', GetPacientes);
router.delete('/', DeletePacientes);
router.put('/', updatePacientes);

module.exports = router;
