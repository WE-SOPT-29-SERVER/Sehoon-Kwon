const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { success, fail } = require('../../../lib/util');
const sc = require('../../../constants/statusCode');
const rm = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');
const jwtHandlers = require('../../../lib/jwtHandlers');

module.exports = async (req, res) => {
  const { email, name, phone, password } = req.body;

  if (!email || !name || !phone || !password) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALstatusCode));
  }

  let client;

  try {
    const client = await db.connect();

    const userFirebase = await admin
      .auth()
      .createUser({ email, password, name })
      .then((user) => user)
      .catch((e) => {
        console.log(e);
        return { err: true, error: e };
      });

    if (userFirebase.err) {
      if (userFirebase.error.code === 'auth/email-already-exists') {
        return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, '해당 이메일을 가진 유저가 이미 존재합니다.'));
      } else if (userFirebase.error.code === 'auth/invalid-password') {
        return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, '비밀번호 형식이 잘못되었습니다. 패스워드는 최소 6자리의 문자열이어야 합니다'));
      } else {
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERRstatusCode));
      }
    }

    const idFirebase = userFirebase.uid;

    const user = await userDB.addUser(client, email, name, phone, idFirebase);
    const { accesstoken } = jwtHandlers.sign(user);

    console.log(user);

    res.status(sc.OK).send(success(sc.OK, rm.CREATED_USER, { user, accesstoken }));
  } catch (error) {
    console.log(error);
    functions.logger.error(`[EMAIL SIGNUP ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] email:${email} ${error}`);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERRstatusCode));
  } finally {
    client.release();
  }
};
