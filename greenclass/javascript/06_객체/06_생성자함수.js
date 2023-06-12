/* 생성자 함수(construction function)
    - 객체를 만들어주는 함수
*/

/*
const fruit1 = {
    name: 'apple',
    display: function(){
        console.log(`${this.name}🍎`);
    }
}
console.log(fruit1);
fruit1.display();

const fruit2 = {
    name: 'banana',
    display: function(){
        console.log(`${this.name}🍌`);
    }
} */

// 생성자 함수 템플릿

function Fruit(name, emoji){ // 생성자 함수는 이름 대문자로 시작
    this.name = name,
    this.emoji = emoji,
    this.display = function(){
        console.log(`${this.name} : ${this.emoji}`);
    }
    return this; // 생성자함수에서는 자동으로 리턴이라 생략가능해서 쓰지 않음
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange','🍊');
const lemon = new Fruit('lemon', '🍋');

console.log(apple);
apple.display();
console.log(orange);
orange.display();

console.log(lemon.name);
console.log(lemon.emoji);