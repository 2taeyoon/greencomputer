/*
    이터러블 - 반복, 순회할 수 있음
    이터레이션 프로토콜을 따르는 객체(반복, 순회할 수 있는 규격을 따르는 객체)

    예시) array, string, Map, Set   -   이터레이션 프로토콜을 따르는 기본 자료구조

    for..of, spread 연산자에서 사용할 수 있음
*/

const arr1 = ['하늘', '산', '바다'];

for(const item of arr1.entries()){
    console.log('item.entries()는?',item);
}

// for(변수(배열의 아이템) of 배열){ 실행문.. }
// keys() / values()
// entries()    -   인덱스, 밸류 나열

/* 오브젝트로 for of 사용해봄!!
const obj = { a:1, b:2, c:3 };
for(const item of obj){
    console.log('오브젝트의 아이템은?',item);
}
TypeError: obj.entries is not iterable - 오브젝트는 이터러블이 아님 */


// 오브젝트는 for in은 사용 가능

const obj = { a:1, b:2, c:3 };
for(const item in obj){ // key 값을 출력함
    console.log('오브젝트의 아이템은?',item);
}

const iterater = arr1.values(); // 이터레이터를 반환하는 함수
console.log('첫번째 next', iterater.next());
// 결과 객체 리턴함 { value: '하늘', done: false } - 첫번째 밸류: 하늘, done: 끝났는지 아닌지 여부
console.log('두번째 next', iterater.next());
console.log('세번째 next에서 value', iterater.next().value);
console.log('네번째 next', iterater.next());    // value: undefined
console.log('다섯번째 next에서 끝났는지 여부', iterater.next().done);


// while이용
const iterater2 = arr1.values();
console.log('iterater2?', iterater2);

while(true){
    const item = iterater2.next();
    if(item.done) break;
    console.log('while문- ',item.value);
}