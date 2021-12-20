const { success, fail } = require('../../../lib/util');
const rm = require('../../../constants/rm');
const sc = require('../../../constants/statusCode');
const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));

  const user = users.filter((user) => user.email === email)[0];
  const data = {
    id: user.id,
    email: user.email,
    name: user.name,
  };
  if (!user) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_USER));
  }

  if (user.password !== password) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.MISS_MATCH_PW));
  }

  res.status(sc.OK).send(success(sc.OK, rm.LOGIN_SUCCESS, data));
};
