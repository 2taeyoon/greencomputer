/*
    객체지향 프로그래밍-절차적으로 코드를 작성하는게 아니라
    연관있는 것끼리 객체로 만들어서 호환 가능하도록

    객체를 손쉽게 만들 수 있는 템플릿
    1. 생성자함수(오래된 고전적 방법)
    2. 클라스
        - 객체를 생성할 수 있는 템플릿(청사진, 틀)
        - 클라스를 이용해서 만든 객체는 인스턴스라고 부름 instance
*/


// 클라스 생성
class Fruit {
    constructor(aa,bb){ //생성자, new키워드로 객체를 만들때 호출
        this.name = aa;
        this.emoji = bb;
    }
    // 함수는 일반적으로 생성자에서 등록하지 않고 밖에서 정의함
    display = () => {   // this, function display() - ❌
                        // 일반 함수나, 화살표 함수로 작성
        console.log(`${this.name} : ${this.emoji}`);
    }
}

//객체 apple은 Fruit 클라스의 인스턴스(클라스를 통해서 만들어진 객체)
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange','🍊');
const lemon = new Fruit('lemon', '🍋');

console.log(apple);
apple.display(); // display는 함수니까 (); 를 붙혀줘야 한다
console.log(orange);
orange.display();

console.log(lemon.name);
console.log(lemon.emoji);