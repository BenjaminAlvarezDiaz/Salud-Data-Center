const {Router} = require('express');

const EmpresasRoutes = require('../routes/empresas.routes.js')
const DoctorsRoute = require('../routes/doctor.routes.js')
const pacientesRoute = require('./pacientes.routes.js');
const ProductosRoute = require('./productos.routes.js')
//const TipoRoute = require('./tipo.routes.js')
const CategoriaRoute = require('./categoria.routes.js')
const RecordsRoute = require('./record.routes.js');


const router = Router();

router.use('/Empresas',EmpresasRoutes)
router.use('/Doctors',DoctorsRoute)
router.use('/pacientes', pacientesRoute);
router.use('/Productos', ProductosRoute);
//router.use('/Tipo', TipoRoute);
router.use('/Categoria', CategoriaRoute);
router.use('/Records', RecordsRoute);



module.exports = router;

