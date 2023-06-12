/*
    표현식(Expression) - 값으로 평가 될 수 있는 문

    리터럴(Literal) - 코드에서 값을 나타내는 표기법 ( 123 '123' true {} [] )
    - 템플릿 리터럴(Template Literal) - `` ${}
    - 함수 리터럴 - funtion(){}

    문(statment) - 최소 실행 단위
    - 선언 - 선언문
    - 할당할때 - 할당문
    - 조건 - 조건문
    - 반복 - 반복문
    - 값으로 평가될 수 있는 문 - 표현식
*/

let aa; // 선언문
aa = 1005; // 할당문, 표현식

// let bb = let aa; 있을 수 없음 선언문을 bb에 할당할 수 없다

let bb = aa = 1006; // let bb = (aa = 1006);
console.log(bb);