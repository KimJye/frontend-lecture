/**
 * 다음 기능을 구현하시오.
 * (1) 빈 배열을 만든다.
 * (2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
 * (3) 배열의 오름차순으로 정렬한다.
 * (4) 배열을 출력한다.
 */

 const array = []

 for(let i=0; i<100; ++i){
     const num = Math.floor(Math.random() * 100) + 1
     array.push(num)
 }

 array.sort((a,b)=>{ return a-b })

 console.log(array)