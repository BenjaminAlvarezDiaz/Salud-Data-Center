const { Router } = require('express');
const { getCategory } = require ('../controllers/getCategoria.js')
const { postCategory } = require ('../controllers/postCategorias.js')



const router = Router();

router.get('/', getCategory);

router.post('/', postCategory);

module.exports = router;