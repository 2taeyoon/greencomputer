/*
    class field (접근 제어자)
        - 앞에 #을 붙혀서 사용한다
        - 캡슐화(외부에서 보이지 않고 수정 못함), 내부에서만 접근 가능
        - private / public / protected(상속된 자식 클라스에서만 접근가능)
        - private(# 사용) / public(디폴트 값) / protected(자바스크립트에서는 없음)
*/

class Fruit {
    #name;
    #emoji;
    //  Fruit 클라스 안에 name이라는 프로퍼티가 있다고 선언
    //  외부로부터 전달받을 데이터 - 생략가능
    constructor(aa,bb){
        this.#name = aa;
        this.#emoji = bb;
    }
    display = () => { // 함수도 #을 붙이면 외부에서 접근 불가능
        console.log(`${this.#name} : ${this.#emoji}`);
    }
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '바나나'; // 변경가능 - ????? 외부에서 변경이 불가능하게 하고 싶음!!
// #이 붙은 상태에서는 에러 - 외부에서 접근 불가능
console.log('apple은?', apple); // field 정보가 나오지 않음, 외부에서 접근 가능한 display만 나옴
console.log('apple.display는?',apple.display);
apple.display();
//console.log(apple.#name);