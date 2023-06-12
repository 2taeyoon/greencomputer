// Optional Chaining Operator (?.)

let item = false
let item2 = { price: 1200 };

const price = item && item.price;  // 아이템이 있으면 뒤의 아이템 price를 할당
const price2 = item2 && price;       // 아이템이 있으면 뒤의 아이템 price를 할당

console.log('price는?', price);
console.log('price2는?', price2);

const obj1 = { name:'🐶' };
const obj2 = { name:'😺', owner: {name: '바비'} };
const ownerName = obj1?.owner?.name; // 옵셔널 체이닝 연산자 사용 undefined

console.log(ownerName);