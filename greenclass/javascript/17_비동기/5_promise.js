function runDelay(seconds){ // 콜백을 전달받지 않음
    return new Promise((resolve,reject)=>{
        if(!seconds || seconds < 0){
            reject(new Error('시간은 0보다 커야함'));
        }
        setTimeout(resolve, seconds);
    });
}
runDelay(1000)
    .then( () => { console.log('타이머 완료')} ) // 필요한 일을 수행, 성공했을 때
    // .catch( (error) => { console.log(error) } )
    .catch(console.error) // 에러처리, 실패했을 때 - 전달된 인자와 호출할 인자가 같을 때는 생략가능
    .finally( () => { console.log('끝!')} ); // 최종, 무조건 호출