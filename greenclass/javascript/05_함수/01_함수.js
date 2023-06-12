/*
    함수 : 특정한 일을 수행하는 코드의 집합
        - 가독성이 좋고, 재사용이 가능, 유지 보수성

    
    function name(매개변수 or 인자) { 함수 정의 }
    name(매개변수 or 인자) ◀◀◀ 함수를 호출하는 것
*/

function add(num1, num2){ // const result = num1 + num2; return result; // 값을 외부로 반환
    return num1 + num2; } // return을 제외하면 undefined

const result = add(3, 5); // 함수 호출
console.log(result);

let firstName1 = '우성';
let lastName1 = '정';
let fullName1 = `${firstName1} ${lastName1}`;
console.log(fullName1);

let firstName2 = '정재';
let lastName2 = '이';
let fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName2);

function fullName(aa, bb){ return `${bb}${aa} ❤` }
console.log(fullName(firstName1,lastName1));
console.log(fullName(firstName2,lastName2));
console.log(fullName('혜수','김')); // fullName 함수에 retrun `${bb}${aa}` 로 정의하여 냅다 적어도 적용이 가능하다.