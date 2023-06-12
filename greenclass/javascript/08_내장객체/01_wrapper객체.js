/*
    내장객체(bild-in Object)
    - 자바스크립트가 기본적으로 가지고 있는 객체
    
    래퍼객체(wrapper Object)
    - 원시값에 적용되는 객체(원시값을 내장객체로 변환)
*/

console.log('globalThis는 무엇?',globalThis);
// node 전역객체, 윈도우 콘솔에서도 해볼것!
console.clear();

const num = 1234; // Number (숫자열, 원시타입)
console.log('num은?',num);
// num뒤에 .을 찍으면 사용할 수 있는 매소드(프로퍼티)가 쫙 뜬다 (원시값을 내장객체로 변환)
// Number 원시타입을 감싸고 있는 Number타입 객체로 변환된다
// Number에 해당하는 함수(매소드),프로퍼티를 사용할 수 있다
console.log('num은?',num.toString()); // 숫자를 문자열로 전환, 자체적으로 실행하기 때문에 소괄호가 있음

const tt = '    글씨    '; // string (문자열, 원시타입)
console.log('tt.length는?', tt.length); // string 객체 - 길이를 나타내는 프로퍼티, 자체적으로 실행하지 않기 때문에 소괄호가 없음
console.log('tt.trim()는?', tt.trim()); // string 객체 - 문자열 양 옆의 여백을 없애주는 매소드, 글씨 중간은 ❌
