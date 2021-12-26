/**
 * @Hash_Mission
 */

const { encrypt, readFile, writeFile } = require('./module');
const crypto = require('crypto');

if (!readFile('hashed')) {
  const password = readFile();
  const salt = crypto.randomBytes(32).toString('hex');
  const hashedPassword = encrypt(salt, password);
  writeFile(hashedPassword);
} else {
  throw console.error('...! Already Hashed Password is exist !...');
}
