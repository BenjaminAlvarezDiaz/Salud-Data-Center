const { Router } = require('express');
const { postRecords } = require('../controllers/postRecords');
const { getRecordById, getAllRecords, getRecords } = require('../controllers/getRecords');

const router = Router();

router.post("/postRecords", postRecords);
//router.get("/:id",getRecordById);
//router.get("/getAllRecords",getAllRecords);
router.get("/getRecords", getRecords);

module.exports = router;