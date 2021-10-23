const express = require('express');
const router = express.Router();
const users = require('../dbMockup/user');
const rm = require('../constants/responseMessage');
const sc = require('../constants/statusCode');
const { success, fail } = require('../lib/util');

/**
 * @SIGN_UP
 */
router.post('/signup', async (req, res) => {
  const { id, name, password, email } = req.body;

  if (!id || !name || !password || !email) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const alreadyUser = users.filter(user => user.email === email).length > 0;
  if (alreadyUser) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.ALREADY_EMAIL));
  }

  const newUser = { id, name, password, email };
  users.push(newUser);
  res.status(sc.OK).send(success(sc.OK, rm.CREATED_USER, newUser));
});

/**
 * @LOGIN
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const alreadyUser = users.filter(user => user.email === email).length > 0;
  if (!alreadyUser) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_USER));
  }

  const user = users.filter(user => user.email === email)[0];
  if (user.password !== password) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.MISS_MATCH_PW));
  }

  res.status(sc.OK).send(
    success(sc.OK, rm.LOGIN_SUCCESS, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  );
});

module.exports = router;
