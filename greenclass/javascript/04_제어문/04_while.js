/*
    반복문 loop statment

    while(조건){ 조건에 만족할 때 계속 실행 }
*/


let num = 5;
while( num <= 10 ) { console.log(num); num++; }

let isActive = /*20*/false;
let i = 0;

while (isActive) { console.log( '아직 살아있음!!' + i );
if( i === 20 /* 조건 */ ){ break; /* 조건에 맞으면 멈춘다는 뜻 */ } i++; }

// do {} while()
// 무조건 한번은 실행하고 나서 조건 적용
do { console.log('do while 한번은 실행해보자' + i ); } while(isActive) { console.log( '아직 살아있음!!' + i ); }