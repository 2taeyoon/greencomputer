/********** 구조 분해 할당 Destructuring Assignment **********
    파괴, 분해 -> 배치

*/

const fruits = ['🥝', '🍎', '🍇', '🍏', '🥑', '🧅'];
console.log(fruits[2]);

const [ kiwi, apple, ...others ] = fruits;
// 배열의 구조가 분해되어서 순서대로 할당, 3번째부터는 rest parameter로 사용

console.log(apple); // 분해 후에는 인덱스로 접근할 필요x, 배열이름 필요x
console.log('others는?',others);

const point = [1, 2];
const [ y, x, z=1004 ] = point;   //z=1004 (기본값 설정하고 추가)
console.log('y? ',y)
console.log('x? ',x)
console.log('z? ',z)


// 함수에서 사용
function createEmoji(){
    return ['apple', '🍎'];
}

console.log('createEmoji()는?',createEmoji()); // => 의미있는 이름으로 하나씩 쓰고 싶음!
const [title, emoji] = createEmoji();
console.log('title은?',title);
console.log('emoji는?',emoji);

// 오브젝트에서 사용
const student1 = { name: 'sunny', age: 20, major: 'business' };

// function display(person){
//     console.log('person.name은?',person.name);
//     console.log('person.age는?',person.age);
//     console.log('person.major는?',person.major);
// }

function display({name, age, major}){ // 처음부터 구조를 분해해서 받아옴
    console.log('구조분해 person.name은?',name);
    console.log('구조분해 person.age는?',age);
    console.log('구조분해 major는?',major);
}
display(student1);

// 그냥 변수 할당
const { name, age, major: job, pet='dog' } = student1;
console.log('오브젝트로 변수를 선언한 name은?',name);
console.log('오브젝트로 변수를 선언한 age는?',age);
// console.log('오브젝트로 변수를 선언한 major는?',major); // 재설정 해줘서 작동 x
console.log('오브젝트로 변수를 선언한 pet은?',pet); // pet='강아지' 추가
console.log('marjor를 재설정한 job은?',job);