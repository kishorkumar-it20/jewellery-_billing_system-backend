const express = require('express');
const router = express.Router();
const controller = require('../controllers/billingController');

router.post('/', controller.createBill);
router.get('/', controller.getAllBills);
router.get('/search', controller.searchBills);

module.exports = router;
