const {Router} = require('express');

const EmpresasRoutes = require('../routes/empresas.routes.js')
const DoctorsRoute = require('../routes/doctor.routes.js')
const PacientesRoute = require('./pacientes.routes.js');
const ProductosRoute = require('./productos.routes.js')
const CategoriaRoute = require('./categoria.routes.js')
const RecordsRoute = require('./record.routes.js');
const CitasRoute = require('./citas.routes.js');
const PedidosRoute = require('./pedidos.routes.js');


const router = Router();

router.use('/Company',EmpresasRoutes)
router.use('/Doctors',DoctorsRoute)
router.use('/Patient', PacientesRoute);
router.use('/Product', ProductosRoute);
router.use('/Category', CategoriaRoute);
router.use('/Records', RecordsRoute);
router.use('/Appointment', CitasRoute);
router.use('/Orders', PedidosRoute);



module.exports = router;

