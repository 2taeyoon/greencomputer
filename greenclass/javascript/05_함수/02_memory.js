function add(a, b){ return a+b; }

const sum = add;
// add가 가르키는 메모리 주소를 sum에 그대로 할당
// sum도 변수의 형태를 띄고 있지만 함수처럼 사용이 가능(일급함수)

console.log('add 함수 실행', add(3,5));
console.log('sum 함수 실행', sum(3,9));
console.log('sum 함수 실행', sum()); // NaN
// 함수에 매개변수(a, b)가 지정되어 있을때는 반드시 넣어줘야 한다.