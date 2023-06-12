/*
    == 배열을 사용하는 함수(method)들 == 
    -일급함수(first-class function)
    -고차함수(higher-order function) - 다른 함수를 인자로 받거나 반환(콜백), 사이드이펙트가 없음
    forEach / find / findIndex / some / every / filter / map / flatMap / sort / reduce
*/
const fruits= ['🍇','🍎','🍋','🍒']  ;

/* for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}*/

//배열.forEach(function(배열의아이템,아이템의순서,배열){ })
fruits.forEach(function(value,index,array){
    console.log('value는?',value);
    console.log('index는?',index);
    console.log('array는?',array);
})
//실행구 한개만 있을때 생략
fruits.forEach((vv) => console.log('아이템만 필요해 ',vv))



// 조건에 맞는(콜백함수) 아이템을 찾을 때
const item1 = { name:'🍔', price:2500 }
const item2 = { name:'🍩', price:1000 }
const item3 = { name:'🍰', price:4000 }
const products = new Array(item2, item1, item3, item2); 

//도넛을 찾아라!
/* let found = products.find(function(value){
    return value.name == '🍩'
  }) */
let found = products.find((value)=>  value.name == '🍩' )
// {}중괄호 없이 한줄로 축약할때는 return 필요없음
console.log('도넛 찾음!!', found);

found = products.findIndex((value)=>  value.name == '🍩' )
console.log('도넛의 인덱스값??', found);
// 배열.find(함수)  -제일 먼저 나오는 조건에 맞는 아이템을 반환
// 배열.findIndex(함수)  -제일 먼저 나오는 조건에 맞는 아이템의 인덱스를 반환


// 배열의 아이템들이 부분적을 조건(콜백함수)에 맞는지 확인 
let result = products.some(function(aa){
    return aa.name === '🍩';
})
console.log('도넛이 하나라도 있니?', result);
// 배열.some(함수)   -하나라도 있으면 true 


// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인 
result = products.every((bb) => bb.name === '🍩');
console.log('아이템의 name이  전부 도너츠니?', result);
// 배열.every(함수)   -배열의 특정 부분이 모두 같은지 확인 


// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍩');
console.log('도너츠가 들어가있는 모든 아이템을 새로운 배열로',result)
// 배열.filter(함수)  -조건에 맞는 아이템을 새로운 배열로 만들어줌
