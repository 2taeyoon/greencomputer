// 증감 연산자 Increment & Decrement Operator

let a = 0;

a++; // a = a + 1 (a에 1씩 증가)
console.log(a);

a--;
console.log(a); // a = a - 1 (a에 1씩 감소)

/*
    주의!!
    a++ 필요한 연산(앞쪽)을 먼저하고, 그 뒤에 값을 증가시킴
    ++a 값을 먼저 증가시키고 필요한 연산을 함
*/

a = 0;
let b = a++;
console.log('현재 b는?',b); // 0
console.log('현재 a는?',a); // 1
// 할당 연산자가 먼저 a를 b에 대입한 후에 a가 증가함

let c = 1;
let d = ++c;
console.log('현재 c는?',c); // 2
console.log('현재 d는?',d); // 2
// 증감 연산자가 먼저 실행되고 그 후에 d에 할당해준다