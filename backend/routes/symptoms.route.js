const express = require('express');
const router = express.Router();

const {symptoms} = require('../controllers/symptoms.controller');

router.post("/", symptoms);

module.exports = router;