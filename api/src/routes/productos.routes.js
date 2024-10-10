const { Router } = require('express');

const { getProducts } = require ("../controllers/getProductos.js");

const { createProducts } = require ('../controllers/postProductos.js')



const router = Router()


router.get('/getProducts', getProducts);

router.post('/', createProducts);


module.exports = router;
