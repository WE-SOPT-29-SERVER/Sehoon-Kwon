const crypto = require('crypto');
const fs = require('fs');

const encrypt = password => {
  console.log('... Hashed Password ! ...');
  return crypto.createHash('sha512').update(password).digest('hex');
};

const readFile = () => {
  console.log('... Loading Password File ! ...');
  return fs.readFileSync(__dirname + '/password.txt', 'utf8');
};

const writeFile = data => {
  console.log('... Hashed Password File Generated ! ...');
  fs.writeFileSync(__dirname + '/hashed.txt', data);
};

module.exports = { encrypt, readFile, writeFile };
