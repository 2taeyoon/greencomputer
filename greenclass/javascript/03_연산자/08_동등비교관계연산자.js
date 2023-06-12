/*
    동등비교관계연산자 (Equality Operator)

    ==      값이 같은
    !=      값이 다름
    ===     값과 타입이 둘다 같음
    !==     값과 타입이 다름
*/

console.log('2==2는?' , 2==2 );
console.log('2!=2는?' , 2!=2 );
console.log('2==3는?' , 2==3 );
console.log('2!=3는?' , 2!=3 );

console.log('2=="2"는?' , 2=="2" );     // 타입이 달라도 2가 같음
console.log('2==="2"는?' , 2==="2" );   // 타입이 다름

console.log('true == 1은?' , true==1 );
console.log('true === 1은?' , true===1 );
console.log('false == 0은?' , false==0 );

const obj1 = { name : 1004 }
const obj2 = { name : '1004' }

console.log( obj1 == obj2 ); // 메모리 주소가 다름
console.log( obj1.name == obj2.name );
console.log( obj1.name === obj2.name );