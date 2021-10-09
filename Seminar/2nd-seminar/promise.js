/**
 * @Promise_선언
 */

const promise = new Promise((resolve, reject) => {
  // logic
});

/**
 * @Fulfilled_Rejected
 */

const promise = new Promise((resolve, reject) => {
  const age = 25;
  if (age > 20) {
    resolve(age);
  } else {
    reject(new Error('나이가 너무 어립니다'));
  }
});

promise
  .then(resolvedData => {
    console.log(resolvedData);
  })
  .catch(err => {
    console.log(err);
  });

/**
 * @Promise_Chaining
 */
const cook = (callback, timeout) => {
  setTimeout(callback, timeout);
};

const ramenRecipe = () => {
  return new Promise((resolve, reject) => {
    cook(() => {
      console.log('[라면 진행상황]');
      resolve('[라면 만들기 시작]');
    }, 1000);
  });
};

const boilWater = progress => {
  return new Promise((resolve, reject) => {
    console.log('[라면] - 1. 물 끓이기 시작');
    cook(() => {
      resolve(`${progress} ---> 물 끓이기`);
    }, 2000);
  });
};

const putTheRamenAndSoupPowder = progress => {
  return new Promise((resolve, reject) => {
    console.log('[라면] - 2. 라면과 스프 넣기 완료, 앞으로 3분 간 끓이기 시작');
    cook(() => {
      resolve(`${progress} --> 면과 스프 넣기 후 3분 간 끓이기`);
    }, 500);
  });
};

const delayThreeMinutes = progress => {
  return new Promise((resolve, reject) => {
    console.log('[라면] - 3. 3분 간 대기 시작');
    cook(() => {
      resolve(`${progress} ---> 라면 완성`);
    }, 3000);
  });
};

ramenRecipe()
  .then(progress => boilWater(progress))
  .then(progress => putTheRamenAndSoupPowder(progress))
  .then(progress => delayThreeMinutes(progress))
  .then(progress => console.log(progress));

ramenRecipe()
  .then(boilWater)
  .then(putTheRamenAndSoupPowder)
  .then(delayThreeMinutes)
  .then(console.log);
