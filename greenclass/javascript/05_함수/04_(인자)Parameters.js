/* 인자 Parameters */
// 매개변수( )의 기본값은 undefined
function add(a, b){ 
    console.log(a);
    console.log(b);
    console.log(arguments);
    // 전달된 인자 정보를 출력해주는 프로퍼티(함수에 기본적으로 내장), 매개변수 정보는 arguments 객체 저장
    console.log(arguments[1]); // 배열의 형식으로 2번째 인자를 선택
}
add(5,6,7,8);


function add2(a=5, b=3){
    console.log(arguments);
    console.log('a+b ? ',a+b);
}
add2();
add2(1005, 1);
// 매개변수에서 기본값 설정가능, Default Parameters
// 외부에서 값이 지정되면 기본값은 지정 안됨


/*
    Rest 매개변수 - 몇개의 인자를 받아올지 모를 때
*/

function sum(...numbers){ console.log(numbers); }
sum(1,2,3,4,5,6,7);
sum('딸기', '피자', '짬뽕', 1005, '스파게티', '볶음밥', '치킨'); // 문자 숫자 둘다 사용 가능

function sum2(a,b,x,...numbers){
    console.log(numbers); // numbers에는 4번째 인자부터 들어있음
    console.log(a); // 1번째 인자
    console.log(b); // 2번째 인자
}
sum2(1,2,3,4,5,6,7);
sum2('딸기', '피자', '짬뽕', 1005, '스파게티', '볶음밥', '치킨');