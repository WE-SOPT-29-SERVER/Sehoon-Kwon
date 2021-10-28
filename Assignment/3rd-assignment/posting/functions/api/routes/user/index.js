const express = require('express');
const router = express.Router();

/**
 * @route /user/signup
 */
router.post('/signup', require('./userSignUp'));

module.exports = router;
