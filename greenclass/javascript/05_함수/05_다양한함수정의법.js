/*
    1. 기본 함수선언 : function( ){ }
    2. 함수표현식(익명함수)
        - const name = function( ){ }
        - 함수는 객체(object)이기 때문에 가능
        - 함수를 변수에 할당해서 사용
    3. 화살표 함수(arrow function)
        - const name = ( ) => { }
    4. 생성자 함수 const name = new Function( )
    5. 즉시실행함수 (IIFE, Immedicately-Invoked Function Expression)
        - 즉각적으로 호출되는 함수

    표현식(expression : 값으로 평가될 수 있는 것)
*/


// 2. 함수표현식(익명함수) - const name = function( ){ }
let add = function(a,b){ return a+b; }
// let add = function 이름(a,b){ } 이름을 써도 의미가 없음
console.log(add(5,3));


// 3. 화살표 함수(arrow function) - const name = ( ) => { }
let add2 = (a,b) => { return a+b; } 
console.log('화살표함수', add(6,4));
// let add2 = (a,b) => a+b;
// 실행구-한줄 / 값이 바로 리턴시 return 생략가능
// console.log(add(5,3));

/* 5. 즉시실행함수
    function run(){ console.log('🏃‍♂️'); }
    run();
    ▶▶▶▶▶ 선언, 호출을 따로 해야됨
*/

(function run(){ console.log('🏃‍♂️'); })();
// 한번만 실행시 선언부분을 소괄호로 묶고 호출문 ();
//let sum = (a,b) => { console.log(a+b); }
//sum(500,120);

(function sum(a,b){ console.log('즉시실행함수 결과', a+b); })(500,120);