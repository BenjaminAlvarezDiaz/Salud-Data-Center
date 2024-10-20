const { Router } = require('express');

const { getProducts } = require ("../controllers/getProductos.js");

const { postProduct } = require ('../controllers/postProductos.js')



const router = Router()


router.get('/getProducts', getProducts);

router.post('/postProducts', postProduct);


module.exports = router;
