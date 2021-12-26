/**
 * @Promise_Seminar_Mission
 * @desc 온라인이면서 OB인 인원, YB이면서 오프라인인 인원을 리턴하는 Promise (0.5s)
 */
const members = require('./members');

const getOnline = members => {
  return new Promise((res, err) => {
    setTimeout(() => {
      console.log('...온라인 인원 필터링...');
      const onlineMembers = members.filter(
        member => member.location === 'online'
      );
      res(onlineMembers);
    }, 500);
  });
};

const getOffline = members => {
  return new Promise((res, err) => {
    setTimeout(() => {
      console.log('...오프라인 인원 필터링...');
      const offlineMembers = members.filter(
        member => member.location === 'offline'
      );
      res(offlineMembers);
    }, 500);
  });
};

const getYB = members => {
  return new Promise((res, err) => {
    setTimeout(() => {
      console.log('...YB 인원 필터링...');
      const membersYB = members.filter(member => member.group === 'YB');
      res(membersYB);
    }, 500);
  });
};

const getOB = members => {
  return new Promise((res, err) => {
    setTimeout(() => {
      console.log('...OB 인원 필터링...');
      const membersOB = members.filter(member => member.group === 'OB');
      res(membersOB);
    }, 500);
  });
};

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);
