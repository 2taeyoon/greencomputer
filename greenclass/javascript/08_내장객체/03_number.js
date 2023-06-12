/*
    number 오브젝트
*/

const num1 = 123;
const num2 = new Number(123); // 객체 만듦, 굳이 할필요없음(데이터 낭비)
console.log(num1);
console.log(num2);
console.log(typeof num1); // num1의 타입이 무엇인가
console.log(typeof num2); // num2의 타입이 무엇인가

console.log('사용할 수 있는 가장 큰 수',Number.MAX_VALUE);
// 정수에서 사용할 수 있는 가장 큰 숫자
// e+308 = 10의 308제곱
console.log('사용할 수 있는 가장 작은 수',Number.MIN_VALUE);
console.log('안전하게 사용할 수 있는 가장 큰 수',Number.MAX_SAFE_INTEGER);
console.log('안전하게 사용할 수 있는 가장 작은 수',Number.MIN_SAFE_INTEGER);

const num3 = 1234.56;
console.log('그냥 문자열로 변환', num3.toString());
console.log('실수는 반올림하여 문자열로 변환', num3.toFixed());
console.log('이집트',num3.toLocaleString('ar-EG')); // 각국의 언어로 표시

console.log('원하는 자릿수까지만 보인다',num3.toPrecision(3));