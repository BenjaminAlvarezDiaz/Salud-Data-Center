const { Router } = require('express');
const { getCategory } = require ('../controllers/getProductos.js')
const { createCategory } = require ('../controllers/postProductos.js')



const router = Router()

router.get('/', getCategory);

router.post('/', createCategory)

module.exports = router;