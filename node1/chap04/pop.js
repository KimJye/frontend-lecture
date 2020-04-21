/**
 * 배열 객체의 pop 메소드는, 배열의 끝의 항목을 배열에서 제거하여 리턴한다.
 * 배열의 크기는 1 감소한다.
 */
let a = [1, 3, 5, 7]

while (a.length > 0) {
    let value = a.pop()
    console.log("pop value=%d, array=[%s]", value, a.toString())
}