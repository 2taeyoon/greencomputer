// 연산자 우선순위 (Priority)

let a = 2;
let b = 3;

let result = a + b * 4; // 곱셉, 나눗셈이 먼저
console.log(result);

result = ( a + b ) * 4;
console.log(result); // 20

// 필요한 연산을 먼저 진행하고 a++ 증감 연산자가 작동한다
result = a++ + b + 4;
console.log(result); // 9
console.log('a는?', a); // 3

result = a++ + b * 4;
console.log(result); // 15
console.log('a는?', a); // 4

result = ( a++ + b ) * 4;
console.log(result); // 28
console.log('a는?', a); // 5