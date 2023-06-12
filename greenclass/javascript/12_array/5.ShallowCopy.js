//shallow copy  얕은 복사

//오브젝트 만듦
const hamburg = { name:'🍔', price:2500 }
const donut = { name:'🍩', price:1000 }
const cake = { name:'🍰', price:4000 }

const store1 = [hamburg, donut]; //배열은 오브젝트를 아이템으로 갖고 있음
const store2 = Array.from(store1); 
console.log('store1 ',store1)
console.log('store2 ',store2)

store1.push(cake);
console.log('store1에 cake추가후 store1 ',store1);
console.log('store1에 cake추가후 store2 ',store2);
//store1에 추가했을때 store2는 바뀌지 않는다 - 서로 다른 배열이 만들어졌다는 것을 확인!

hamburg.price = 4300; //햄버거 가격인상

console.log('hamburg가격 수정 후 store1 ',store1);
console.log('hamburg가격 수정 후 store2 ',store2);