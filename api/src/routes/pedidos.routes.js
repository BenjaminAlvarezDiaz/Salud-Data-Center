const { Router } = require('express');
const { getOrders, getOrdersByStatus } = require('../controllers/getPedidos.js');
const { postOrders } = require('../controllers/postPedidos.js');
const { deleteOrders } = require('../controllers/deletePedidos.js');
const { updateOrders } = require('../controllers/putPedidos.js');
const router = Router();

router.get("/getOrders", getOrders);
router.get("/getOrders/Status",getOrdersByStatus)
router.post("/postOrders", postOrders);
router.delete("/deleteOrders", deleteOrders);
router.put("/updateOrders", updateOrders);

module.exports = router;