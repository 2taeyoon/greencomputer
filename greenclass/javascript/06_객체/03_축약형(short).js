// 축약형

const x = 0;
const y = 50;
// const coodinate = { x:x, y:y } // value 값을 외부에서 가져온 것
const coodinate = { x, y } // key 이름과 value(참조하고 있는 변수)의 이름이 같으면 생략가능
console.log('좌표값은?', coodinate);


function makeObj(name, age){
    // return { name:name, age:age }
    return { name, age } // name(key값):name(value값) 같아서 name으로 생략 
}
console.log(makeObj('전지현', 20));