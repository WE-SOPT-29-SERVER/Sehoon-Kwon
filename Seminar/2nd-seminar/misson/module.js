const crypto = require('crypto');
const fs = require('fs');

const encrypt = password => {
  console.log('... Hashed Password ! ...');
  return crypto.createHash('sha512').update(password).digest('hex');
};

const readFile = fileName => {
  console.log('... Loading Password File ! ...');
  return fs.readFileSync(__dirname + `/text/${fileName}.txt`, 'utf8');
};

const writeFile = data => {
  console.log('... Check /text ...');
  fs.writeFileSync(__dirname + '/text/hashed.txt', data);
  console.log('... Hashed Password File Generated ! ...');
};

module.exports = {
  encrypt,
  readFile,
  writeFile,
};
