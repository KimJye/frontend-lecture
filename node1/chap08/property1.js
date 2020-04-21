let person = {name: "홍길동", age: 16};

person[2] = "김지혜";

person[-1] = "루비";

person[0] = "호형호제";

person[1] = "도술";

person[1000000000] = "십억";

person[1000000001] = "십억 살짝 넘음";

person[10000000000] = "백억";

person[4294967296] = "2의 32제곱";

person[10000000000000000000] = "배열 얼마나 큰가";

person[4294967295] = "2의 32제곱 미만";

console.log(person);
console.log(person[0]);

/**
 * { '0': '호형호제', '1': '도술', name: '홍길동', age: 16 }
 * 호형호제
 */