const { Router } = require('express');
const { getCategoria } = require ('../controllers/getProductos.js')
const { createCategoria} = require ('../controllers/postProductos.js')



const router = Router()

router.get('/', getCategoria);

router.post('/', createCategoria)

module.exports = router;