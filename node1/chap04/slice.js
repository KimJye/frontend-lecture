/**
 * .slice(시작_위치, 끝_위치)
 * slice 메소드는 배열의 부분을 리턴한다.
 * 리턴되는 부분 배열은, 원본 배열에서 시작_위치에서 끝_위치 사이의 항목들이다.
 * (시작위치 <= 위치 < 끝 위치)
 * 원본 배열은 변경되지 않는다
 */

let a = [0, 1, 2, 3]

console.log(a.slice(0, 1))
console.log(a.slice(0, 2))
console.log(a.slice(1, 2))
console.log(a.slice(1, 3))