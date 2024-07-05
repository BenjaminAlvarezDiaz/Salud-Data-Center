const { Router } = require('express');
const {getEmpresas, verificarEmpresaPorCredenciales} = require ("../controllers/getEmpresas.js");
const {createEmpresas} = require("../controllers/postEmpresas.js");
const { DeleteEmpresas } = require('../controllers/deleteEmpresas.js');
const { updateEmpresa } = require('../controllers/putEmpresas.js');
const router = Router()

router.get('/', getEmpresas);
router.post('/search', verificarEmpresaPorCredenciales);
router.post('/',createEmpresas);
router.delete('/', DeleteEmpresas);
router.put('/', updateEmpresa);

module.exports = router;
