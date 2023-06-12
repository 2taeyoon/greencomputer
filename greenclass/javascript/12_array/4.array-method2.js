const fruits = ['🍎','🍇','🍍','🍉','🍉','🍉'];

// 기존 배열에서 잘려와 새로운 배열을 만듦
let newFru = fruits.slice(1,2);
console.log('새로운 배열?',newFru);
// 배열.slice(시작지점부터(인덱스), 마지막지점 바로 전까지 반환(몇번째인지))
// 배열.slice()   - 아무것도 안 적으면 전체 반환
// 배열.slice(1)  - 2번째부터 끝까지 반환

newFru = fruits.slice(-2); // 뒤에서부터 2개 아이템
console.log('-값 이용',newFru);

// 여러개의 배열을 붙여줌(합쳐줌) concat
const arr1 = [1,2,3];
const arr2 = [100,200,300];
const arr3 = arr1.concat(arr2);
console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);

// 순서를 거꾸로 reverse
const arr4 = arr3.reverse();
console.log('arr4 = arr3.reverse()', arr4);

// 특정 값으로 배열 아이템 채우기
arr4.fill('🍄');
console.log('fill로 아이템 채우기', arr4);

arr4.fill('🥑', 1, 3);
console.log("fill('🥑', 1, 3)", arr4);
// 배열.fill(채울아이템, 시작 인덱스부터, 마지막인덱스 바로 전까지)

arr4.fill('🌹', 3);
console.log("fill('🌹', 3)", arr4);
// 배열.fill(채울아이템, 시작 인덱스부터 끝까지)

arr5 = ['하늘', '🍍', 'sky', '🌹', '밤하늘의 펄', 1004];
console.log('arr5', arr5);

let text = arr5.join(); // 자동으로 ,(콤마)를 이용하여 문자로 반환
console.log('text', text);

text = arr5.join(' / ');
console.log('text', text);


// 중첩된 배열, 하나의 배열로 쫙 펴기 flat
const arr6 = [['🍄','🍵','🧊'], [1,2,3, [100,200]]];
console.log('중첩된 배열 arr6', arr6);
const arr7 = arr6.flat();
console.log('중첩된 배열 arr6 flat 적용', arr7);
// 기본은 1단계까지 풀어줌
// 배열안에 배열이 또 있을 경우는 숫자(단계)를 넣어준다
// arr6.flat(2); 로 하면 2단계 중첩까지 풀어진다