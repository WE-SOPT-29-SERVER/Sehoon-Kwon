const { success, fail } = require('../../../lib/util');
const rm = require('../../../constants/rm');
const sc = require('../../../constants/sc');
const users = require('../../../dbMockup/user');
const https = require('https');
module.exports = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const alreadyUser = users.filter((obj) => obj.email === email).length > 0;
  if (alreadyUser) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.ALREADY_EMAIL));
  }

  const newUser = {
    id: users.length + 1,
    name,
    password,
    email,
  };

  res.status(sc.OK).send(success(sc.OK, rm.CREATED_USER, newUser));
};

const getTopRatedFoodOutlets = async (city, page) => {
  const url = `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`;

  const request = https.request();
};
