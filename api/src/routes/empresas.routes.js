const { Router } = require('express');
const { getCompany, verificarEmpresaPorCredenciales } = require ("../controllers/getEmpresas.js");
const { createCompany } = require("../controllers/postEmpresas.js");
const { deleteCompanies } = require('../controllers/deleteEmpresas.js');
const { updateCompany } = require('../controllers/putEmpresas.js');
const router = Router();

router.get('/', getCompany);
router.post('/search', verificarEmpresaPorCredenciales);
router.post('/', createCompany);
router.delete('/', deleteCompanies);
router.put('/', updateCompany);

module.exports = router;
