/**
 * @비동기식_콜백함수
 */

console.log('Hello');

setTimeout(function () {
  console.log('bye');
});

console.log('Hello again');

/**
 * @동기식_콜백함수
 */

print = () => {
  console.log('print');
};

printImmediately = () => {
  print();
};

printImmediately(print);
