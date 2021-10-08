/**
 * @LEVEL3
 * @desc 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기
 * @desc 조건: OB, YB 비율 오차범위를 최소한으로 유지하며 코드 작성
 */

import members from './members.js';

let YB = [];
let OB = [];

// YB, OB 구분
members.forEach(member => {
  if (member.group == 'YB') {
    YB.push(member.name);
  } else {
    OB.push(member.name);
  }
});

// 구분된 YB, OB 섞기
const shuffle = members => {
  for (let index = members.length - 1; index > 0; index--) {
    const rand = Math.floor(Math.random() * (index + 1));
    const temp = members[index];
    members[index] = members[rand];
    members[rand] = temp;
  }
};

shuffle(YB);
shuffle(OB);

// 조 편성 시작
const count = Math.floor(Math.random() * 6) + 2;
const countGroupFunc = () => {
  if (members.length % count != 0) {
    return Math.round(members.length / count) + 1;
  } else {
    return Math.round(members.length / count);
  }
};
const countGroup = countGroupFunc();

console.log(`
===========================================================
\n조 인원 ${count}명으로 설정됨\n
\n총 ${countGroup}개의 조가 생성됨\n
===========================================================
`);

// 조, 남은 인원 담을 배열 생성
const groups = new Array(countGroup);
const temp = new Array();

for (let i = 0; i < countGroup; i++) {
  groups[i] = new Array();
}

for (let i = 0; i < OB.length; i++) {
  groups[i % countGroup].push(OB[i]);
}

for (let i = 0; i < YB.length; i++) {
  if (groups[i % countGroup].length != count) {
    groups[i % countGroup].push(YB[i]);
  } else {
    temp.push(YB[i]);
  }
}

if (temp.length != 0) {
  for (let i = 0; i < countGroup; i++) {
    if (groups[i].length < count && temp.length != 0) {
      groups[i].push(temp[0]);
      temp.shift();
    }
  }
}

// 조편성 결과 출력
groups.forEach(group => {
  console.log(`<${groups.indexOf(group) + 1}조>`, group.join(' '));
  console.log();
});
