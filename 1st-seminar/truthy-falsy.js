/**
 * @truthy_falsy
 */

const num = 1
const str = '1'

// 동등 연산자는 값만을 비교합니다.
console.log(num == str)
// 1 -> "1", 타입 캐스팅이 일어납니다.

// 일치 연산자는 값 & 타입 둘 다 비교합니다.
console.log(num === str)


const bool = true;

console.log(num1 == bool); //true
console.log(num2 == bool); //false


console.log(Boolean(-1)); //true
console.log(Boolean({})); //true
console.log(Boolean([])); //true

console.log(Boolean('')); //false

//null <-> undefined
/**
 * @null_undefined
 * => postgresql에서 undefined 지양
 */
