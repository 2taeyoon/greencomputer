/* 
    접근자 프로퍼티 (Acceessor property)    getter / setter
    함수 앞에 get을 붙이면 프로퍼티처럼 호출 가능(소괄호()를 붙이지 않고 호출)
*/

class Student {
    constructor(firstName, lastName){
        this.aa = firstName;
        this.bb = lastName;
      //this.fullName = `${this.bb} ${this.aa}`; //추가1
    }
    get fullName(){   // 2 get추가
        return `${this.bb} ${this.aa}`
    }

    set fullName(value){ // 할당한 것을 받아와서 설정함
        console.log('set-',value);
    }
}

    const student1 = new Student('지현','전')  //오브젝트(인스턴스)

    console.log(student1.aa);
    //console.log(student1.fullName());  //함수호출 하듯 ()붙여야 함
    //프로퍼티, 함수 호출할때 동일하게 하고 싶음
    
    student1.aa = '두환'; 
    console.log(student1.fullName);  //추가1  - 이름을 바꿨어도 업데이트가 안됨 - 위 함수에 get붙인 이후에는 업데이트 됨
    
    student1.fullName = '강동원'; // 할당을 하면 set호출, 인자로 전달