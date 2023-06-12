/* 블리언 타입(blloean) - true / false */

let aa = true // 문자지만 따옴표를 쓰지 않으면 블리언이다
console.log('변수 aa는?', aa);
console.log('변수 !aa는?', !aa); // 앞에 ! 를 붙혀주면 값의 반대

console.log(0);
console.log(!0); // true - 없지 않다는 의미

// Falshy 거짓인 값 !!(느낌표 2개)를 붙이면 블리언으로 전환
console.log('========== Falsy 거짓인 값 ==========');
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// truethy 참인 값 !!(느낌표 2개)를 붙이면 블리언으로 전환
console.log('========== truethy 참인 값 ==========');
console.log(!!1);
console.log(!!-1);
console.log(!!'문자열');
console.log(!!{}); // 비어있는 오브젝트
console.log(!![]); // 비어있는 배열
console.log(!!Infinity);

// 응용
console.log('========== 응용 ==========');
let bb;
console.log('변수 bb는?', !!bb);
console.log( 3 < 2 );
console.log( 3 == 2 ); // = 1개는 대입 = 2개는 같다라는 의미
console.log( 3 > 2 );