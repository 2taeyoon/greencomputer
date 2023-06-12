/*
    단항연산자(Unary operator)
    +(양) -(음) !(부정)
*/

let a = 5;
a = -a // -1*5 와 같은 의미
console.log('-a = -a', a); // -5

a = -a // -1*-5 와 같은 의미
console.log('-a', a); // 5

a = +a // 1*5 와 같은 의미
console.log('+a', a); // 5

let bool = false;
console.log('bool은?',bool);
console.log('!bool은?',!bool); // true
console.log('!!bool은?',!!bool); // false, 이미 boolean 인 경우는 !! - 부정의 부정(긍정)

// +를 앞에 써주면, 숫자가 아닌 타입들을 숫자로 변환시켜서 어떤값이 나오는지 확인 가능

// console.clear();
console.log('+false는?', +false); // 0(false는 0으로 간주됨)
console.log('+null은?', +null); // 0
console.log('+빈공간은?', +''); // 0
console.log('+ture은?', +true); // 1
console.log('+문자열은?', +'문자열'); // NaN(Not a Number)
console.log('+undefined은?', +undefined); // NaN(Not a Number)

console.log(!!1005); // !! - 값을 boolean 타입으로 변환