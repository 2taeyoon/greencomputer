/* 불변성 immutability - 변경할 수 없는
    - 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않음
*/

function display(num){ 
    num = 444; // 지역변수 num=444; 는 좋지 않음❌
    console.log(num); }

const value = 3;
display(value);
console.log(value);

//오브젝트로 사용
function displayObj(obj){
    obj.name = 'nuriya' // 좋지 않음❌ - 외부에서 주어진 인자(오브젝트)를 내부에서 변경. 메모리 주소를 가져오는 거라 오브젝트 내용이 바뀌어버림
    console.log('display함수 안에서',obj); }

const nabi = { name: 'Nabiya', color: 'orange' }
displayObj(nabi);
console.log(nabi); // 지역변수가 전역변수를 바꿔버렸음.

// 바른 변경방법
function changeName(obj){
    console.log({...obj, name: 'bori'}) // 오브젝트라서 중괄호{ }로 감쌌음
    // 기존 오브젝트들을 유지하면서, 수정해줌 spread
}
changeName(nabi);