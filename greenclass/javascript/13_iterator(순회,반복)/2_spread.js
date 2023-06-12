/*****  spread 연산자, 전개구문  *******   
    모든 iterable은 spread 될 수 있음

*/


function add(a, b, c){
    return a+b+c;
}

const num = [1,2,3];
console.log(add(num[0], num[1], num[2])); //넘 번거로움 ㅠㅠ
console.log(add(...num));   // ... 배열 안 아이템이 쫙 펼쳐져서 전달

// Rest parameters  -  함수에서 인자로 받아올 때 갯수가 정해져 있지 않음
function sum(first, second, ...nums){ // 앞 두개는 아는데 뒤에는 사용자 맘대로 해
    console.log('nums?', nums);
}
sum (1, 2, '하하하', 8, 9, 63);


// concat을 이용해서 Array 합쳐줌
const fruit1 = ['🍓', '🍑'];
const fruit2 = ['🍇', '🍏'];
let arr = fruit1.concat(fruit2);
console.log('concat 이용하여 합치기',arr);

// concat을 사용하지 않고 Array 합쳐줌
arr = [...fruit1, '🍗', ...fruit2]; // 간단하게 새로운 아이템 추가 가능
console.log('...을 이용하여 합치기',arr);

// Object
const student1 = { name: 'sunny', age: 20, home: { address: 'seoul'} };
const student1_1 = { ...student1, major: 'business' };
console.log('student1는?',student1);
console.log('student1는?',student1_1);