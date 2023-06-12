/*
    확장 extends
*/
/*
class Tiger {
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('냠냠')
  }
  sleep(){
    console.log('쿨쿨')
  }
}
class Dog {
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('냠냠')
  }
  sleep(){
    console.log('쿨쿨')
  }
  play(){
    console.log('놀자아아~~')
  }
}     => 같은 내용이 반복되는 클라스*/

//공통적으로 적용되는 부분을 묶어준 클라스
class Animal {
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('냠냠');
  }
  sleep(){
    console.log('쿨쿨');
  }
}

class Tiger extends Animal {};
//Tiger클라스는 Animal클라스를 상속받음

const tt = new Tiger('노랑까망');  //Tiger클라스를 이용해 객체만듦
console.log(tt);
tt.sleep();


class Dog extends Animal {  //Animal클라스를 상속, 새로운 매소드 추가    
  play(){
    console.log('놀자아아~~');
  }
}
const doggy = new Dog('얼룩색');
console.log(doggy);
doggy.sleep();
doggy.play();

class puppy extends Animal {
  constructor(color,age){   //부모Animal에 있는 인자도 같이 써줘야
    super(color);       //상속하는 부모Animal에서 받아옴
    this.age = age;
  }
  eat(){
    super.eat();      //부모 eat함수를 호출          
    console.log('쮸릅');
  }  //오버라이딩 -자식클라에서 부모 클라스에 있는 함수를 덮어 씌움
}
const pp = new puppy('오렌지',1);
console.log(pp);
pp.eat();




