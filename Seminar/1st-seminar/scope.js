/**
 * @Scope
 * @desc Function Scope 와 Block Scope에 대해 알아보자
 */

// var의 scope
if (true) {
  var x = 'var';
}
console.log(`var: ${x}`);

var x = 'var';
if (true) {
}
console.log(`var: ${x}`);

// let, const의 scope
if (true) {
  let y = 'let';
  const z = 'const';
}
console.log(`let: ${y}  const: ${z}`); // let, const는 scope를 벗어난 곳에서 호출시 원하는 값 x

// Function scope
function colorFunction() {
  if (true) {
    var x = 'abc';
    console.log(x);
  }
  console.log(x);
}
console.log(x); // function scope를 벗어남
