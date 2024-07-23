const { Router } = require('express');
const { getCategoria } = require ('../controllers/getCategoria.js')
const { createCategoria} = require ('../controllers/postCategoria.js')



const router = Router()

router.get('/', getCategoria);

router.post('/', createCategoria)

module.exports = router;