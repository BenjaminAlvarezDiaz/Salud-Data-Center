const { Router } = require('express');

const { getProductos } = require ("../controllers/getProductos.js");

const { createProductos } = require ('../controllers/postProductos.js')



const router = Router()


router.get('/', getProductos);

router.post('/', createProductos);


module.exports = router;
