// 할당(대입) 연산자 Assigment operator

let a = 1;
a = a + 2;
console.log('a는?',a); // 3
// 산술 연산자와 병행

a += 2; // a = a + 2; 축약
console.log('a는?',a); // 5

a -= 3; // a = a - 3; 축약
console.log('a는?',a); // 2

a *= 4; // a = a * 4; 축약
console.log('a는?',a); // 8

a **= 2; // a = a ** 2; 축약
console.log('a는?',a); // 64

let b = 10;
b %= 4; // b = b % 4; 축약
console.log('b는?',b); // 2

b **= 3; // b = b ** 3; 축약
console.log('b는?',b); // 8