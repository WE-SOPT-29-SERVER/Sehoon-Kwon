const members = require('./members');

const getOnline = members => {
  return new Promise((res, err) => {
    setTimeout(() => {
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
      const membersYB = members.filter(member => member.group === 'YB');
      res(membersYB);
    }, 500);
  });
};

const getOB = members => {
  return new Promise((res, err) => {
    setTimeout(() => {
      const membersOB = members.filter(member => member.group === 'OB');
      res(membersOB);
    }, 500);
  });
};

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);
