/*
    global Object - 특정한 객체에 속하지 않음, 최상위 객체
    node - 모듈 / 브라우저 - window
*/

console.log('globalThis는 무엇?',globalThis);
console.clear();
// node 전역객체, 윈도우 콘솔에서도 해볼것!
console.log('This는 무엇?', this); // 모듈에 있는 정보를 출력(현재는 아무것도 없음)
console.log('isFinite(5)는 무엇?', isFinite(5)); // 숫자가 유한인지 아닌지 boolean값으로 확인
console.log('isFinite(Infinity)는 무엇?',isFinite(Infinity));

console.log('숫자지만 문자열?', '-12.34'); // 문자열
console.log(parseInt('-12.34')); // 문자열 안에 있는 숫자(실수)를 정수로 변환
console.log(parseFloat('-12.34')); // 문자열 안에 있는 숫자(실수)를 그대로 숫자로 변환

// URL은 아스키 문자(알파벳)로만 구성되어야 함. 한글은 깨져보임
// URI ( Uniform Resorce Identifier) - 고유한 주소나 아이디를 의미
// 한글이나 특수문자는 이스케이프 처리
const URL = 'http://네이버.com';
console.log(URL);
const enUrl = encodeURI(URL); // 아스키 문자로 변환(인코딩) - 프론트,백엔드 간 많이 사용
console.log(enUrl);

const decUrl = decodeURI(enUrl); // 다시 되돌리는 것
console.log(decUrl);