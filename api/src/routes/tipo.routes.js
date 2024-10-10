const { Router } = require('express');

const { getType } = require("../controllers/getProductos.js")

const { createType } = require ('../controllers/postProductos.js')



const router = Router()


router.get('/', getType);

router.post('/', createType);


module.exports = router;