const express = require('express');
const router = express.Router();
const { validateDataArray } = require('../middleware/validation');
const { 
    processBfhlData, 
    getOperationCode 
} = require('../controllers/bfhlController');

router.post('/bfhl', validateDataArray, processBfhlData);
router.get('/bfhl', getOperationCode);

module.exports = router;
