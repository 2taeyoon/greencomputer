/*
    1. 주어진 숫자까지 0부터 차례로 값을 출력하는 함수
    2. -추가 다양한 함수 설정
*/

function interate(max,action){
    for(let i=1; i<=max; i++){
    action(i); /* action 호출*/ } }
function print(num){ console.log(num); } // 단순하게 출력해주는 함수

function multy(bb){ console.log('bb가 3배수로',bb*3); }

//interate(10,print);
interate(5,function(a){ console.log('a가 무엇?',a); });
interate(3,(num) => console.log(num * 2)); // 여기서는 print 함수를 안거침 안 함.
// 함수 이름을 호출 안하고 직접 써도됨
interate(5, multy);

//setTimeout(callback, 시간)
setTimeout( ()=>{
    console.log('3초뒤 이 함수 실행!!') } ,3000 )