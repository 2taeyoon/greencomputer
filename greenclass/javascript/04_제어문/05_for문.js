/* 
    반복문 loop statment

    for(변수 초기값; 조건식; 증감식) { }
    
    실행순서
    1. 변수선언, 초기화
    2. 조건식이 참이면 { } 코드 블럭을 수행
    3. 증감식 수행
*/

let i; // 전역변수로 for문 밖에서 선언
for(i=0; i<=5; i++) { console.log(i); } // for문에서만 선언되는 지역변수
// i++ 대신 i = i +2 같은 것도 가능

console.log('밖으로 나왔어요! i는?', i);

// 중첩
for(let a=0; a<5; a++) { console.log(a);
for(let j=0; j<5; j++) { console.log(`a는${a}, j는${j}`); /* 이 블럭에서 실행되다가 j가 5가 되면 끝내고 다시 바깥 블럭으로 */ } }