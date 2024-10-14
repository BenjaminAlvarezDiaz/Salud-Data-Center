const { Router } = require('express');

const { getProducts } = require ("../controllers/getProductos.js");

const { CreateProduct } = require ('../controllers/postProductos.js')



const router = Router()


router.get('/getProducts', getProducts);

router.post('/postProducts', CreateProduct);


module.exports = router;
