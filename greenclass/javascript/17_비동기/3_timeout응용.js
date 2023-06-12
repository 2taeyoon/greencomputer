// 주어진 시간이 지나면 callback 함수를 호출함

function runDelay(callback, seconds){
    if(!seconds || seconds < 0){ // 시간이 넘어오지 않았거나, 시간이 0보다 작으면
        throw new Error('시간은 0보다 커야함');
    }

    setTimeout(callback, seconds);
};

try {
    runDelay( ()=> { console.log('타이머 완료'); }, 2000);
} catch (error) {
    console.log('작동이 안되요!!');
}