// null, undefined

let variable; // 변수 선언만, 모르는 상태
console.log( variable ); // undefined 메모리상 어떤 데이터도 들어있지 않음
variable = null; // 변수가 비어있다고 선언
console.log( variable );

let activeItem;
console.log( 'activeItem은?' , activeItem );
activeItem = null
console.log( 'activeItem은?' , activeItem );
console.log( 'typeof null은?' , typeof null); // object라고 표시 - 비어있다는 의미가 이미 할당됨
console.log( 'typeof undefined은?' , typeof undefined); // typeof - 변수의 타입이 무엇인지 알아옴