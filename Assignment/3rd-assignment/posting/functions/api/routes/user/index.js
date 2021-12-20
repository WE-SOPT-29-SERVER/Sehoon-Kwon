const express = require('express');
const router = express.Router();

/**
 * @route /user/signup
 */
router.post('/signup', require('./userSignUpPOST'));
router.post('/login', require('./userLoginPOST'));
router.get('/:id', require('./userGET'));
router.put('/:id', require('./userPUT'));
router.delete('/:id', require('./userDELETE'));

module.exports = router;
