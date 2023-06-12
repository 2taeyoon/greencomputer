/* 숫자열 */
let integer = 123; // 정수 - 숫자는 아무거나 다 됨
let negative = -123; // 음수
let double = 1.23; // 실수(소수점)
console.log(integer, negative, double);

let binary = 0b1111011;
let octal = 0o173;
let hex = 0x7b;

console.log('2진수-',binary);
console.log('8진수-', octal);
console.log('16진수-', hex);

console.log(0/123); // 0
console.log(123/0); // infinity
console.log(123/-0); // -infinity
console.log(123/'aa'); // NaN (Not a Number)