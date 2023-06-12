// 반복문 제어 - break, continue

for(let i=0; i<20; i++) { console.log(i);
    if(i === 10 ){
        //continue; // 아래(같은 블록안의 코드)를 무시하고 바로 다음으로 넘어감
        console.log('i가 10이 되었어요!');
        break; /* 반복문 그만 작동! */ } }