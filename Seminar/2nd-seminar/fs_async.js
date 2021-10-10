/**
 * @FileSystem_Async
 */
const fs = require('fs');

const numArr = [1, 2, 3, 4, 5];

/**
 * fs.writeFile (file, data, [options], callback) {}
 */
numArr.forEach(num => {
  const title = 'async' + num;
  const data = `'${title}.txt' 생성 `;
  fs.writeFile(`${title}.txt`, data, (err, data) => {
    if (err) return console.log(err.message);
    console.log(`${title}`);
  });
});

/**
 * @fs.readFile (file, data, [options], callback) {}
 */
// numArr.forEach((num) => {
//     const title = 'async' + num;
//     fs.readFile(`${title}.txt`, (err, data) => {
//         if (err) return console.log (err.message);
//         console.log(`${title}.txt 의 데이터 출력 \n"${data}"\n`);
//     });
// });
