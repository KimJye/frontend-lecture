/**
 * (1) 배열을 만든다.

(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.

(3) 배열의 원소들 중에서 1의 자리가 5보다 크고, 9보다 작은 값들을 제거한다.

(예: 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 25, 26, 27, 28, 29 ...)

(4) 배열을 출력한다.
 */

 const array = [];
 for(let i=0; i<100; ++i){
     array.push(Math.floor(Math.random() * 100) + 1);
 }

 const result = array.filter(n => {
     const num = n%10;
     if(!(num>=5 && num<=9)) return n;
 })

 console.log(result)