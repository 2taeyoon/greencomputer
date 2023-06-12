const food = ['🍕', '🍔', '🍟', '🌭']; // 배열 리터럴로 배열 생성
console.log(food);

// 배열 아이템을 참조(선택)하는 방법
console.log('food[0]은?',food[0]); // 피자
console.log('food[3]은?',food[3]); // 프레첼
console.log('food.length', food.length); // .찍어보면 사용할 수 있는 함수, 속성이 나옴
console.log('food[food.length-1]은?', food[food.length-1]); // .찍어보면 사용할 수 있는 함수, 속성이 나옴

for(let i =0; i < food.length; i++){
    console.log(food[i]);
}

// 인덱스로 추가 = 좋지 않은 방법
food[6] = '🍎'; // 중간에 빈 아이템이 있는 상태로 추가
console.log('사과 추가',food);
food[food.length] = '🍗'; // 마지막에 사과 추가
console.log('닭다리 추가',food);

food[2] = '🥚'; // 기존 아이템 업테이트
console.log('계란 추가',food);

// 인덱스로 삭제
delete food[1]; // 2번째 삭제
console.log('2번째 아이템 삭제',food); // 삭제된 채로 남아있음