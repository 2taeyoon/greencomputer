/*
    논리연산자 Logical Operator
    && And
    || or

    단축평가(short-circuit evaluation) - if문에서 처럼 모든 항이 실행되지 않음
*/

const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Jenny' };

if(obj1 && obj2){ // 블리언 값으로 변화되어 평가
    console.log('둘다 true');
};

// 조건문 밖에서 사용
let result = obj1 && obj2;
console.log('조건문 밖에서 사용 &&', result);
//  - 둘다 트루 -  - obj1 false -
// && 뒤에꺼 할당 / 앞에꺼 할당
// || 앞에꺼 할당 / 뒤에꺼 할당 -> 앞에가 true면 뒤에가 실행❌

result = obj1 || obj2;
console.log('조건문 밖에서 사용 ||', result);
//  - 둘다 트루 -  - obj1 false -
// && 뒤에꺼 할당 / 앞에꺼 할당
// || 앞에꺼 할당 / 뒤에꺼 할당 -> 앞에가 true면 뒤에가 실행❌


// 활용하기

function changeOwner(animal){
    animal.owner = 'G-dragon';
}

obj1.owner && changeOwner(obj1); // 주인이 있는 경우 함수 실행
obj2.owner && changeOwner(obj2); // 주인이 있는 경우 함수 실행
console.log('obj1 changeOwner 함수 실행', obj1);
console.log('obj2 changeOwner 함수 실행', obj2);

function makeNewOwner(animal){ // 주인이 없는 경우에만 함수 실행
    animal.owner = 'Bogum Park';
}

obj1.owner || makeNewOwner(obj1); // 앞에가 false라 함수 실행⭕
obj2.owner || makeNewOwner(obj2); // 앞에가 true라 함수 실행❌
console.log('obj2 makeNewOwner 함수 실행', obj1);
console.log('obj2 makeNewOwner 함수 실행', obj2);