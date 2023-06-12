//  async,await   -절차적으로 사용
//  .then이 필요없음(지저분해지는 것을 방지) 

/*
console.log('안녕하세요!')
setTimeout(function(){ console.log('반갑습니다')},1000)  */

// Pronise then
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));  // ms 시간만큼 대기 후 resolve 호출하는 프로미스 반환
}

/*
console.log('안녕하세요!')
sleep(1000)
    .then(()=> console.log('반갑습니다'))
*/

//async,await사용
async function process(){  // async 함수 정의
    console.log('안녕하세요!');
    await sleep(3000);  // sleep 함수를 호출하고 3초(3000ms) 동안 대기. await 키워드를 사용하여 비동기 작업이 완료될 때까지 대기
    console.log('반갑습니다');
    return true;  // true를 반환
}

process()  // process 함수 호출. async 함수는 Promise를 반환하므로, 이를 통해 비동기 작업이 완료될 때까지 대기할 수 있음
    .then(console.log);  // process 함수가 반환한 true 값이 출력됨