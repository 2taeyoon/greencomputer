/*
    논리연산자 - 제어문에서 자주 사용하는 연산자 Logical Operator

    &&  그리고 (and) A && B = A와 B가 모두 true
    ||  또는 (or) A || B = A나 B중에 하나만 true
    !   부정(단항연산자에서 온것)
    !!  블리언 값으로 변환(단항연산자 응용버전)
*/

let num = 10;
if( num >= 0 && num <= 5 ) { console.log('🍺맞아요!'); }
    else { console.log('아니야!'); }

let num2 = 10;
if( ! (num2 <= 0 || num2 <= 5 )) { console.log('🧊맞아요!'); }
    else { console.log('아니야!'); }


console.log('true && true는?', true && true); // true
console.log('true && false는?', true && false); // false
console.log('false && true는?', false && true); // false
console.log('false && false는?', false && false); // false

console.log('true || true', true || true); // true
console.log('true || false', true || false); // true
console.log('false || false는?', false || false); // false

console.log("!'문자는?'", !'문자'); // false
console.log("!!'문자는?'", !!'문자'); // true