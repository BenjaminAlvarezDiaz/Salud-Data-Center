const { Router } = require('express');
const { getCompany, authCompany } = require ("../controllers/getEmpresas.js");
const { createCompany } = require("../controllers/postEmpresas.js");
const { deleteCompanies } = require('../controllers/deleteEmpresas.js');
const { updateCompany } = require('../controllers/putEmpresas.js');
const router = Router();

router.get('/', getCompany);
router.post('/search', authCompany);
router.post('/createCompany', createCompany);
router.delete('/', deleteCompanies);
router.put('/', updateCompany);

module.exports = router;
