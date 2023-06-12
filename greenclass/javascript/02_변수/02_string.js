/* 문자열 타입
    - 쌍따옴표, 홑따옴표 사용 '' ""
    -뱁틱으로 감싸줌 ``
*/

let string = 'Hellow World!';
console.log(string);

string = `헬로우~`;
console.log(string);

// 특수문자 출력하는 법
string = "'따옴표가 보이게 할꺼에요!'"; // 따옴표를 출력하고 싶으면 이중으로
console.log(string);

string = '똑같은 \'따옴표\' 쓸거야'; 
// 똑같은 따옴표를 출력하고 싶으면 출력될 부분 앞에 \' 역슬래쉬 사용
console.log(string);

string = '🤷‍♀️줄바꿈이 될까요??? \n(줄바꿈)안녕 이번엔 탭키\t 쓸꺼야\n (이건 유니코드 \u0d00  ) 역슬래쉬를 두번 쓰면? \\'; //이스케이프 표현 \n, \t 등
console.log(string);

/* 템플릿 리터럴 (templete literal)
    -내장된 표현식을 허용하는 문자열 방법
    - 따옴표 대신에 백틱 ${ 변수 }
*/
let id = 'Rainy';
let greetings = '안녕하세요🖐   ' + id + '님!\n오늘은 금요일 즐거운 하루 보내세요!';
console.log(greetings, '- 전통적 방법');

greetings = `안녕하세요🖐 ${id} 님! 오늘은 금요일 즐거운 하루 보내세요!`;
console.log(greetings, '- ES6 템플릿 리터럴');

console.log('1+1=' + 1+1);
console.log(`1+1=${1+1}`);