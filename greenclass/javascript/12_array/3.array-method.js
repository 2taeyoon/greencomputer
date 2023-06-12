const fruits = ['🍎','🍇','🍍','🍉']; // 배열 리터럴로 배열 생성
console.log(fruits);

// 특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({})); // 빈오브젝트-false, []는 true

// 배열 안에 특정한 아이템의 위치 찾을때(인덱스)
// 배열명.indexOf('item')
console.log('🍇의 인덱스는?', fruits.indexOf('🍇'));

// 배열 안에 특정한 아이템이 있는지 체크
// 배열명.includes('item')
console.log('includes로 🍉가 있는지 체크', fruits.includes('🍉'));
console.log('includes로 🥝가 있는지 체크', fruits.includes('🥝'));

// 아이템 추가 - 제일 뒤에
fruits.push('🥝', '🥝'); // 여러개 추가도 가능, 배열 자체를 수정(업데이트)
console.log('push로 🥝추가', fruits);
console.log('push로 🥝추가 fruits.length는?', fruits.length);

// 아이템 추가 - 제일 앞에
fruits.unshift('🍻'); // 여러개 추가도 가능, 배열 자체를 수정(업데이트)
console.log('unshift로 🍻추가', fruits);
console.log('unshift로 🍻추가 fruits.length는?', fruits.length);

// 아이템 제거 - 제일 뒤에
let lastItem = fruits.pop();
console.log('pop으로 제일 뒤에 제거', fruits);
console.log('제거된 아이템은 무엇?', lastItem);

// 아이템 제거 - 제일 앞에
let firstItem = fruits.shift();
console.log('shift로 제일 앞에 제거', fruits);
console.log('제거된 아이템은 무엇?', firstItem);

// 중간 아이템을 추가 또는 삭제
// 배열명.splice(시작인덱스, 삭제될 갯수)
// 삭제될 갯수가 생략될때는 시작인덱스의 뒤에 전부 삭제
let deletes = fruits.splice(1,2); // 1번 인덱스(2번째)부터 2개 삭제
console.log('splice로 중간 제거', fruits);
console.log('삭제된 아이템은?', deletes);

// 현재 남아 있는 Array [ '🍎', '🍉', '🥝' ]
fruits.splice(1,1,'🍦','🍰');
console.log('splice로 중간 제거 후, 그 자리에 추가', fruits);
// 배열.splice(시작인덱스, 삭제될 갯수, 추가될 아이템.......)