/*
    typeof - 데이터타입을 확인
    C언어 같은 경우는 Int variable = ''; - 선언할때 정의해야 함
    But, 자바스크립트는 동적, 타입이 변경
*/

let variable;
console.log(typeof variable); // undefined - js는 할당된 값에 따라 타입 결정

variable = '';
console.log(typeof variable); //string(문자열)로 나옴

variable = 1004;
console.log(typeof variable); //number(숫자열)로 나옴

variable = '1004';
console.log(typeof variable); //string(문자열)로 나옴