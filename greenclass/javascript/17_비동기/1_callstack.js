// 자바스크립트는 기본적으로 단일 스레드(싱글 스레드)
// 동기(Synchronous) - 하나씩 차근차근

function a(){ // 4번째 호출
    for(let i = 0; i<10000000000; i++);
    // 이걸 수행하게 되면 시간이 많이 걸림!!  ->  동기화의 단점
    return 1;
}

function b(){ // 3번째 호출
    return a() + 1;
}

function c(){ // 2번째 호출
    return b() + 1;
}
console.log('시작!');
const result = c(); // 1번째 호출
console.log(result);