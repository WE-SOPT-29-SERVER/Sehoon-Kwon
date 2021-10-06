/**
 * @object_생성
 */
const person = new Object(); // 빈 객체 생성

//프로퍼티 추가
person.name = "권세훈"; // 점표기법 접근
person.part = "Server";
person["group"] = "OB"; // 브라켓 표기법 접근
person.sayHello = function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("=====================");

/**
 * @가장_일반적인_객체_생성
 */
const emptyObject = {}; // 빈 객체 생성
console.log(typeof emptyObject); // object

const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: function () {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function () {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal);
animal.bark();
animal.thisFriends();