let person1 = {name: "홍길동", age: 16};
let person2 = {name: "홍길동", age: 16};

let p = person1;

console.log(person1 == person2); // false
console.log(person1 == p); // true

// 참조형인 객체를 == 연산자로 비교하면, 객체 내부 값을 비교하지 않고,
// 두 참조를 비교한다