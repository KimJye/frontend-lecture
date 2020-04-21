/**
 * "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
 * 위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.
 */

const str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for (let i = 0; i < str.length; ++i) {
    const alpha = str.charAt(i);
    const regx = /[aeiou]/ig;
    if (regx.test(alpha)) console.log(i);
}