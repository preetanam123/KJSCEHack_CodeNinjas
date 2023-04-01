const express = require('express');
const router = express.Router();

const {personal} = require('../controllers/personal.controller');

router.post("/", personal);

module.exports = router;
