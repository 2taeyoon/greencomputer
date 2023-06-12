//  async,await   -절차적으로 사용
//  .then이 필요없음(지저분해지는 것을 방지) 


function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));  // ms 시간만큼 대기 후 resolve 호출하는 프로미스 반환
}

async function makeError(){
    await sleep(3000);  // sleep 함수를 호출하고 3초(3000ms) 동안 대기
    const error = new Error('에러 났어요 ㅠㅠ');  // 에러 객체 생성
    throw error;  // 에러를 throw하여 예외 발생
}

async function process(){
    try{
        await makeError();  // makeError 함수를 호출하고, 에러가 발생하면 예외 처리를 위해 catch 블록으로 이동
    }
    catch(error){  // 예외 처리를 위한 catch 블록
        console.error(error);  // 에러를 출력
    }
}

process();  // process 함수 호출. async 함수는 Promise를 반환하므로, 이를 통해 비동기 작업이 완료될 때까지 대기할 수 있음