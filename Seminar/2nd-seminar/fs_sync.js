/**
 * @FileSystem_Sync
 */
const fs = require('fs');

const numArr = [1, 2, 3, 4, 5];

/**
 * @fs.writeFileSync ( file, data, [options]) {}
 */
numArr.forEach(num => {
  const title = 'sync' + num;
  const data = `'${title}.txt' 생성 `;
  fs.writeFileSync(`${title}.txt`, data);
  console.log(`${title}`);
});

/**
 * @fs.readFileSync ( path, [options]) {}
 */
numArr.forEach(num => {
  const title = 'sync' + num;
  const data = fs.readFileSync(`${title}.txt`);
  console.log(`${title}.txt 의 데이터 출력 \n"${data}"\n`);
});
