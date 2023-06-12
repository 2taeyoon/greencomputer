// 객체에는 함수(method)를 섞어서 쓸 수 있다

const fruit = {
    name : 'apple',
    home : '대구',
    display: function(){ console.log(`${this.name} : 🍎`) }
    // fruit.name으로 써도되지만 보통 this.name으로 쓴다
    // this는 오브젝트 안에서 자기 자신의 속성에 접근할 때 사용하는 것
}
console.log(fruit);
console.log(fruit.home);
fruit.display(); // apple의 display의 value값은 함수라서 함수처럼 작성 fruit.display();