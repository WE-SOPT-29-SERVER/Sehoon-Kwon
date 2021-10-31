/**
 * @LEVEL2
 * @desc 자신의 조원들을 소개할 수 있는 json Array 만들기!
 * @desc (팀원들의 이름, 사는 곳, 나이, 취미를 출력하는 함수를 포함!)
 */

// 조원 json Array
const team = {
  members: [
    { name: '김영권', location: '부천시청', age: 25, hobby: '달리기' },
    { name: '장서현', location: '신도림', age: 23, hobby: '수염 기르기' },
    { name: '이제준', location: '개봉', age: 20, hobby: '음주' },
  ],

  // 팀원 소개 함수
  getMemberInfo: function () {
    console.log('팀원들의 정보를 출력합니다.\n');
    this.members.forEach(member => {
      console.log(
        `${member.name}, ${member.location}에 살고 나이는 ${member.age}살이며 취미는 ${member.hobby}입니다.`
      );
    });
  },
};

team.getMemberInfo();
