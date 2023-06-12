// 자료구조 中 배열은 index중요, 아이템 중복 가능
// set - 배열과 달리 순서(index)❌, 아이템 중복❌

const set = new Set (['하늘', '보리', '헛개차']); // set 생성
// net Set() 비워둬도 가능, []만 넣어도 가능
console.log('set은?', set);
console.log('set의 아이템 갯수 확인', set.size); // length와 같은 의미
console.log('set의 아이템 존재 확인', set.has('산')); // boolean
console.log('set의 아이템 존재 확인', set.has(1004)); // boolean

// 순회, 반복 기능(이터러블함)
set.forEach( aa => console.log( 'forEach사용', aa ));
for(const bb of set) {console.log('for of 사용', bb)};

// 추가
set.add(1004);
console.log('1004 추가1',set);
set.add(1004);
console.log('1004 추가2',set); // 아이템 중복 불가

// 삭제
set.delete('보리');
console.log('바다 삭제',set);

// 전부 삭제
set.clear();
console.log('전부 삭제',set);

// 오브젝트
const obj1 = { name:'🍔', price:2500 };
const obj2 = { name:'🍩', price:1000 };
const objs = new Set([obj1, obj2]); // 2개의 객체가 들어가는 set을 만듦
console.log('objs는?',objs);

obj1.price = 1700; // 가격인하
console.log('obj1 가격인하 후 obj1은?',obj1);
console.log('obj1 가격인하 후 objs는?',objs);
// shallos copy - set도 변경됨

const obj3 = { name:'🍩', price:1000 }; // obj2와 똑같은 아이템을 추가
objs.add(obj3);
// 같아보이지만 obj2와는 다른 주소(메모리)를 가지고 있는 새로운 오브젝트라 중복이 아님
console.log('obj3 추가후 objs는?', objs);

obj3.price = 1500 // 가격인상
console.log('obj3 가격인상 후 objs는?', objs);