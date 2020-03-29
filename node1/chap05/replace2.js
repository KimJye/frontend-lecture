let s = "hello world"; 

console.log(s.replace(/o/g, "O")); 
console.log(s);

/**
 * /정규식/g
 * g는, 일치하는 부분 문자열들을 전부 치환하라는 옵션이다.
 * 
 * /정규식/i
 * i는, 문자열을 비교할 때, 대소문자를 무시하라는 옵션이다
 */