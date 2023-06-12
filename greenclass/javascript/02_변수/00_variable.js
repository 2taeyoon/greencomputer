/* 변수(variable)
    - 1. 값을 저장하는 공간
    - 2. 자료를 저장할 수 있는 이름이 주어진 기억장소

*/

let a = 2023; // 변수선언과 값의 할당

// let(키워드) a(변수이름) = (할당연산자(대입)) ;(문장 끝)

a = '007'; // 값의 재할당
a = '아직은 2월';

console.log(a); 

const b_2 = '뭉개 구름';
console.log(b_2);

/* 변수 이름을 만들때는
    - 1. 영어(대, 소문자 구분)
    - 2. 특수문자 _ $ (이 두가지만 가능)
    - 3. 숫자로 시작 ❌
    - 4. 의미있는 단어를 구체적으로 작성
    - 5. 단어가 두개 이어나올때는
        카멜 케이스(camelCase) - 뒷 단어 처음을 대문자로
        파스칼 표기법(PascalCase) - 모든 단어 처음을 대문자로
        언더바 표기법(under_bar) - 언더바_로 단어를 이어줌
    - 6. 이모지 사용 불가
    - 7. 예약어 ()
*/

let c; // 변수 선언
c =  '딸기'; // '딸기'를 변수 c에 대입한다
console.log(b_2,c); // 2개 사용시 변수 중간에 , 입력

/*
    var - 예전 변수 선언시 사용한 키워드
    let - 변수 재할당이 가능 (ES6 이후)
    const - 변수의 재할당 불가 (ES6 이후)
*/

// 1. node.js 설치
// 2. 터미널에서 npm install nodemon -g  (nodemon 설치)
// 3. npm install -g npm@latest (npm 업데이트)
// 4. npm cache verify ( 데이터들을 수집하여 삭제하고 무결성을 확인 )
// 5. https://mine-it-record.tistory.com/664 (node, npm 최신 업데이트)
// 6. power shell 보안 해제 https://velog.io/@kimy/VS-CODE-supervisor-nodemon-%EC%98%A4%EB%A5%98-ps1-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%A1%9C%EB%93%9C%ED%95%A0-%EC%88%98-%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4

/* 테마 먼저 설치하고 나서 밑에 붙혀넣기
"editor.tokenColorCustomizations": {
    "comments": "#00aa77",
    }

    색상 : #00aa77 #009165
*/