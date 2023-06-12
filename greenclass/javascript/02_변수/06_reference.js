// 원시타입(함수 값(1,a))은 값이 복사됨
let a = 1;
let b = a;
console.log('변수 a는?', a);
console.log('변수 b는?', b);

b ='2023';
console.log('b 재할당 후 변수 a는?', a); // a는 유지
console.log('b 재할당 후 변수 b는?', b); // b는 변경

let apple = { // 주소 0x123456
    name: 'apple', color: 'red', display: '🍎'
}

// 객체타입(함수 이름(hotdog, apple))은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달된다
let hotdog = apple; // 주소 0x123456
console.log('오브젝트 apple는?', apple);
console.log('오브젝트 hotdog는?', hotdog);

hotdog.display = '🌭';
console.log('hotdog display 바꾼후 apple는?', apple);
console.log('hotdog display 바꾼후 hotdog는?', hotdog);
// 한 곳에서 바뀌어도 둘다 업데이트 된다