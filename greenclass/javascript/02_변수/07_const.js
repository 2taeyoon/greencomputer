// let - 재할당 가능

let a = '7';
a = '2023';
console.log(a);


/* 
    const - 재할당 불가능
        1) 상수
        2) 상수변수 또는 변수
*/

const text = 'hello';
// text = '안녕하세요!'; - 에러남!!
// console.log(text);

// 1) 상수 (변하지 않는 단어, 숫자)
const OPEN_PEOPLE = '22'; //대문자 사용하고 단어사이는 언더라인 _ 으로 구분

// 2) 재할당이 불가능한 상수변수 또는 변수
let apple = { name: 'apple', color: 'red', display: '🍎' }
// apple = {  } 다른 주소값으로 할당이 불가능, 다시 설정하면 메모리 셀이 재설정 됨
console.log(apple);
apple.name = '부사'; apple.display ='🍏'; // 각각의 메모리 셀 아이템들은 변경이 가능
console.log(apple); //주소값은 불가능함, 주소값을 다시 설정하면 메모리 셀이 재설정 됨