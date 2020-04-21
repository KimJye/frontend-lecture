/**
 * 배열 객체의 shift 메소드는, 배열의 선두의 항목을 배열에서 제거하여 리턴
 * 배열의 크기는 1 감소한다
 */
let a = [1, 3, 5, 7]

while (a.length > 0) {
    let value = a.shift()
    console.log("pop value=%d, array=[%s]", value, a.toString())
}