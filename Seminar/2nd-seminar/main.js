const sum = require('./sum');
const cal = require('./calculator');

console.log(`\n===== sum module =====`);
sum(2, 5);

console.log(`\n===== cal module =====`);
cal.sum(1, 3);
cal.subtract(3, 1);
cal.divide(1, 3);
cal.multiply(1, 3);
