// num이 짝수면 💑, 홀수면 😂를 출력하도록

// 1 - if
// let num = 2;
// if (num % 2 == 0){ console.log('💑'); } else { console.log('😂'); }

// 2 - 삼항조건연산자
//      조건식 ? 참인 경우 : 표현식(거짓인 경우)
let num = 2;
let emoji;
// num % 2 == 0 ? console.log('💑') : console.log('😂')
emoji = num % 2 == 0 ? '💑' : '😂';
//==변수===조건식=== ? =참= : =거짓=
console.log(emoji);