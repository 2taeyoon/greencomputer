/*
    object 만드는 법
    1. object literal { key : value, key: value }
    2. object class를 이용 - new Object()
    3. object class 안의 create함수 이용 - Object.create
    
    key - 문자, 숫자, 심볼
    value - 문자, 숫자, 심볼 + 객체, 함수
*/

let apple = { name: 'apple',
    // fruit-display: '🍎', // key 값으로 특수문자 ❌( _ , $ 제외)
    'fruit-display': '🍎', // 문자열에서는 특수문자 가능
    1 : 200,                  // key 값은 숫자도 가능(object가 제일 앞으로 옴)
    // ['fruit-display']: '🍏', // 대괄호로 감싸면 대괄호 없는 취급
    ['fruit-display2']: '🍏',
}
// 속성, 데이터에 접근하기 위해서는
console.log(apple);
console.log(apple.name); // 마침표표기법 dot notation
console.log(apple['fruit-display2']); // .생략 대괄호표기법 bracket notation

// 속성 추가
apple.home = '대구';
console.log('home 속성 추가', apple);

// 속성 삭제
delete apple['fruit-display2'];
console.log("['fruit-display2'] 속성 삭제", apple);