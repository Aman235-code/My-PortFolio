const express = require('express');
const sendEmailController = require('../controllers/portfolioController');

const router = express.Router()

// router.post('/sendEmail', sendEmailController);
router.route('/sendEmail').post(sendEmailController)

module.exports = router