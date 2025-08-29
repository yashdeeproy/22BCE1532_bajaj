const express = require('express');
const router = express.Router();
const { healthCheck, getApiInfo } = require('../controllers/bfhlController');

router.get('/health', healthCheck);
router.get('/', getApiInfo);

module.exports = router;
