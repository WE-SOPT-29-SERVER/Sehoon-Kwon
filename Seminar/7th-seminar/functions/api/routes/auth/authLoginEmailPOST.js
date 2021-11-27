const functions = require('firebase-functions');
const { success, fail } = require('../../../lib/util');
const sc = require('../../../constants/statusCode');
const rm = require('../../../constants/responseMessage');
const { signInWithEmailAndPassword } = require('firebase/auth');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

const { firebaseAuth } = require('../../../config/firebaseClient');

const jwtHandlers = require('../../../lib/jwtHandlers');
module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  let client;

  try {
    client = await db.connect(req);

    const userFirebase = await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => user)
      .catch((e) => {
        console.log(e);
        return { err: true, error: e };
      });

    if (userFirebase.err) {
      if (userFirebase.error.code === 'auth/user-not-found') {
        return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NO_USER));
      } else if (userFirebase.error.code === 'auth/invalid-email') {
        return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.INVALID_EMAIL));
      } else if (userFirebase.error.code === 'auth/wrong-password') {
        return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.MISS_MATCH_PW));
      } else {
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
      }
    }

    const {
      user: { uid: idFirebase },
    } = userFirebase;

    const user = await userDB.getUserByIdFirebase(client, idFirebase);

    const { accesstoken } = jwtHandlers.sign(user);

    res.status(sc.OK).send(success(sc.OK, rm.LOGIN_SUCCESS, { user, accesstoken }));
  } catch (error) {
    console.log(error);
    functions.logger.error(`[EMAIL LOGIN ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] email:${email} ${error}`);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
