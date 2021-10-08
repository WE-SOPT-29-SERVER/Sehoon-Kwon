/**
 * @hoisting
 * @desc Hoisting은 scope내에서 모든 선언을 가장 위로 올려준다.
 */

// 코드
hoistFunction();

function hoistFunction() {
  console.log(x);
  var x = 'var';
  console.log(x);
}

// 호이스팅된 코드
function hoistFunction() {
  var x;
  console.log(x);
  x = 'var';
  console.log(x);
}

hoistFunction();
