function add(a,b){ a+b; } // return을 명시하지 않으면 undefined

const result = add(5,3); // 반환해야 하는 함수
console.log(result);

function write(tt){ console.log(tt); }
write('이 글자가 나올까요?') // 반환이 불필요한 함수
// 특정한 일 수행, 반환하지 않는 함수는 return 생략가능

function print(num){ 
    if(num < 0 ){ return; /* return undefined; 의 축약, 조건에 맞지 않는 것은 출력하지 않음 */ }
    console.log(`${num}를 출력합니다`); }

print(12);
print(-12);
// return을 함수 중간에 넣으면 함수가 종료