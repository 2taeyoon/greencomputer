/*
    static - (정적)프로퍼티, 매서드
        - 재사용성을 높이는 방법
        - 클래스에 한번만 만들어지고 각 인스턴스에는 들어있지 않음
*/


class Fruit {
    static MaxFruits = 5; // 최대로 만들 수 있는 과일 갯수 지정(고정)
    constructor(aa,bb){
        this.name = aa;
        this.emoji = bb;
    }

    static makeRandomFurit(){ // 클라스 레벨의 매소드
        return new Fruit('melon','🍈')
    }

    display = () => { // 인스턴스 레벨의 매소드
        console.log(`${this.name} : ${this.emoji}`);
    }
}

// 클라스 내부를 직접 호출 가능 (static)
const aaa = Fruit.makeRandomFurit();
console.log('스타틱 이용',aaa);
console.log('스타틱 프로퍼티', Fruit.MaxFruits);

console.log('클라스 name은?',Fruit.name); // 호출불가능 - 클라스 자체는 데이터가 체워진 상태가 아님
console.log('클라스 display는?',Fruit.display); // 호출불가능 - 클라스 자체는 데이터가 체워진 상태가 아님
// Fruit.display(); // 클라스는 직접호출 불가능

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange','🍊');
const lemon = new Fruit('lemon', '🍋');

console.log(apple);
apple.display();
console.log(orange);
orange.display();

console.log(lemon.name);
console.log(lemon.emoji);