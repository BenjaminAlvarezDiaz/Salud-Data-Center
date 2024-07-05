const { Router } = require('express');
const { postRecords } = require('../controllers/postRecords');
const { getRecordById,getAllRecords } = require('../controllers/getRecords');

const router = Router();

router.post("/",postRecords);
router.get("/:id",getRecordById);
router.get("/",getAllRecords);

module.exports = router;