/*
    1) 원시데이터 (Primitive data)
    - 숫자타입, 문자열타입, 블리언 타입, null,
    undefined, Symbol

    2) 복합데이터(그룹) 함수의 묶음
    - 객체(object) - 데이타, 함수의 묶음(그루핑) / 복합데이터
*/

// let name = 'apple';
// let color = 'red';
// let display = '🍎';

let apple = {
    name: 'apple', color: 'red', display: '🍎'
}

console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

// let furit = 'banana';
// color = 'yellow';
// display = '🍌';

let banana = {
    name: 'banana', color: 'yellow', display: '🍌'
}

console.log(banana);
console.log(banana.color);
console.log(banana.display);

banana.color = 'green'; // 재할당
console.log(banana.color);