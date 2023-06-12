// string

const textObj = new String('Happy String!'); // 객체로 반환
const ttt = 'Happy String! Happy String!'; // 원시타입
console.log('textObj',textObj);
console.log('ttt',ttt);

// .을 찍으면 사용가능한 모든 method와 property
console.log('ttt.length',ttt.length);
console.log('0번째 인덱스는 무엇?',ttt[0]);  // 배열의 인덱스
console.log('5번째 문자',ttt[4]);
console.log('8번째 문자',ttt[7]);
console.log('7번째 문자',ttt.charAt(2));  
//배열 이용하지 않고 몇번째 문자인지 알아오기

console.log('S는 몇번째 문자?',ttt.indexOf('S'));
console.log('S는 몇번째 문자?',ttt.lastIndexOf('y')); // 같은 값이 있으면 마지막거를 반환
console.log('특정문자가 있는지 확인(블린)',ttt.includes('kor')); // 대소문자는 당연히 구분
console.log('특정문자가 있는지 확인(블린)',ttt.startsWith('Happy')); // 대소문자는 당연히 구분
console.log('특정문자가 있는지 확인(블린)',ttt.endsWith('!'));

console.log('대문자로 변환',ttt.toUpperCase());
console.log('소문자로 변환',ttt.toLowerCase());

console.log('앞 문자를 빼고 가져옴',ttt.slice(2));
console.log('뒤 문자를 안빼고 가져옴',ttt.slice(-20));

const aa = '    space   ';
console.log(aa);
console.log(aa.trim());

const longText = 'Fly to the Moon';
console.log('지정한 구분자를 이용하여 여러개의 문자열로 나눔',longText.split(' '));
console.log('지정한 구분자를 이용하여 여러개의 문자열로 나누고, n개만 가져옴',longText.split(' ',2));