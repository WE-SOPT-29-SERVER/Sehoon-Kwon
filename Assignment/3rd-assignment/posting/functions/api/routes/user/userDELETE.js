const { success, fail } = require('../../../lib/util');
const rm = require('../../../constants/responseMessage');
const sc = require('../../../constants/sc');
const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.OUT_OF_VALUE));
  }

  const existingUser = users.filter((obj) => obj.id === +id)[0];

  if (!existingUser) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_USER));
  }
  const newUsers = users.filter((obj) => obj.id !== +id)[0];

  res.status(sc.OK).send(success(sc.OK, rm.UPDATE_DELETE_SUCCESS, newUsers));
};
