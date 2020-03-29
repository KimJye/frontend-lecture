let a = undefined, b = null, c = 0, d = NaN

console.log(a ? "true" : "false")
console.log(b ? "true" : "false")
console.log(c ? "true" : "false")
console.log(d ? "true" : "false")

// 값이 NaN, 0, null, undefined 이면, false로 취급