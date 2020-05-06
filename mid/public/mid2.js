/**
 * (1) 배열을 만든다.

(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.

(3) 배열의 원소들을 문자열 기준으로 정렬하여 출력하시오.

(숫자 기준 정렬 순서는 2 < 11 이지만, 문자열 기준 정렬 순서는 "aa" < "b" 이고, "11" < "2" 이다)
 */

const array = [];
for(let i=0; i<100; ++i){
    array.push(Math.floor(Math.random() * 100) + 1);
};

array.sort((a, b) => {
    return a - b
});

console.log(array);