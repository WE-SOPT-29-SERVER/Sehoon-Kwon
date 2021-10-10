/**
 * @Hash_Mission
 */

const { encrypt, readFile, writeFile } = require('./module');
const crypto = require('crypto');

const password = readFile();
const salt = crypto.randomBytes(32).toString('hex');
const hashedPassword = encrypt(salt, password);

writeFile(hashedPassword);
