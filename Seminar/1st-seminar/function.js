/**
 * @함수_선언식
 */
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));

/**
 * @함수_표현식
 */
const addStr = function (x, y) {
    return x + y;
};
console.log(addStr("안녕", "하세요"));

/**
 * @화살표_함수
 */
// 로직이 한줄일때 return 문 생략 가능
const add = (x, y) => x + y;

// 매개변수가 하나일때 매개변수 소괄호 생략 가능
const square = x => x * x;

// 매개변수가 없을 때 소괄호만 적음
const noParam = () => {return 1;}

// 객체를 리턴하고 로직이 한줄일때는 소괄호 ( ) 로 감싸줘야함
const person = (name, age) => ({ name: name, age: age });

// 위의 person 화살표 함수는 아래와 동일
const person = function (name, age) {
    return {
        name: name,
        age: age,
    };
};