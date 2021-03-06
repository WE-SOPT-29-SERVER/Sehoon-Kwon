const functions = require('firebase-functions');
const { success, fail } = require('../../../lib/util');
const sc = require('../../../constants/statusCode');
const rm = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { username, phone } = req.body;

  if (Number(req.user.id) !== userId) return res.status;

  if (!userId) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));

  let client;

  try {
    client = await db.connect(req);

    const updatedUser = await userDB.updateUser(client, userId, username, phone);
    if (!updatedUser) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NO_USER));

    res.status(sc.OK).send(success(sc.OK, rm.UPDATE_ONE_USER_SUCCESS, updatedUser));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
