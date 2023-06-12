/*
    promise
    - 콜백 중첩(callback hell)을 해결하기 위해
    - 가독성을 높이고, 에러 처리를 쉽게
    - 비동기적으로 수행하는 작업의 결과를 알려줌
*/

const myPromise = new Promise((resolve, reject)=>{
    // 함수 파라메터로 받아옴 resolve-성공, reject-실패

    setTimeout(()=>{
        // resolve(1234); // 1초뒤에 성공하는 promise
        reject(new Error('에러발생!!')); // 1초뒤에 에러 발생
    }, 1000);
});

// promise 설정이 끝나고 할 작업 설정
myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});