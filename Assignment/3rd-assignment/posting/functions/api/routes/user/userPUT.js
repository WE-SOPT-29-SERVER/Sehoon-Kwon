const { success, fail } = require('../../../lib/util');
const rm = require('../../../constants/rm');
const sc = require('../../../constants/sc');
const users = require('../../../dbMockup/user');

/* 
update profile
METHOD : PUT
URI : localhost:3000/user/profile/:id
REQUEST BODY :  name
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 비밀번호를 제외한 Updated User 정보
*/

module.exports = async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  if (!id || !newName) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const existingUser = users.filter((obj) => obj.id === +id)[0];

  if (!existingUser) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_USER));
  }
  const updatedUser = { ...existingUser, name: newName };

  res.status(sc.OK).send(success(sc.OK, rm.UPDATE_PROFILE_SUCCESS, updatedUser));
};
