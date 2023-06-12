/*
    산술연산자 (arithmetic operator)
    +, -, *, /
    % 나머지값
    ** 지수(거듭제곱)
*/

console.log( 5 / 2 ); // 2.5
console.log( 10 % 4 ); // 나머지값 2
console.log( 5**3 ); // 5의 거듭3제곱 5 * 5 * 5
console.log( Math.pow(5,3)); // 예전 방식

// + 연산자 주의점!
let text = '두개의 ' + '문자를 연결';
console.log( text );
text = '1' + 1; // 문자열과 숫자열을 더하면 문자열로 변환
console.log( text );