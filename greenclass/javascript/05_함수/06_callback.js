/*
    callback
    일급객체 (first-class object) = 일급함수(first-class-function)
        - 일반 객체처럼 모든 연산이 가능
        - 함수의 매개변수로 전달 / 함수의 반환값 / 할당명령문 / 동일비교대상

    고차함수(height-order function)
        - 인자를 함수로 받거나(콜백함수(callback))
        - 함수로 반환
*/

// const add = function(a,b){ return a+b; }
// const add = (a,b) => { return a+b; }
const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

// 함수를 인자로 받는 고차함수
function calculator(a,b,action){ // 특정한 일을 수행하는 함수를 전달 받는 것
    let result = action(a,b);
    console.log(arguments);
    console.log('함수 calculator의 결과는?',result); }
calculator(2,3,add);
calculator(2,3,multiply);

// 전달된 action - 콜백함수(나중에 호출해줘)