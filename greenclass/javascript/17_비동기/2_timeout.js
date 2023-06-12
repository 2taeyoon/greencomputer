// js의 callstack은 한번에 하나의 일만 할 수 있음
// node, Web에서 제공하는 API들은 비동기적으로 처리해준다.

// setTimeout(1번 실행), setInterval(반복 실행), fetch, eventListner, DOM API

function excute(){
    console.log('1번째');
    setTimeout( () => {
        console.log('2번째');
    }, 2000);

    console.log('3번째');
}

excute();