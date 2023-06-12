/*
    map - key, value,   키는 중복❌
    배열과 달리 순서(index)없고, set과 달리 아이템(value) 중복이 가능
    오브젝트와 비슷(키,밸류) -but, 
        - 사용할 수 있는 함수가 map이 훨씬 많음
        - 아이템의 value를 호출할때 obj[키] / map.get(키)
*/

const map = new Map([     //map생성자를 이용해서 만듦
    ['key1','🍎'],          //배열안에 또다른 배열
    ['key2','🍌']
]);

console.log('map은? ',map);

//사이즈확인
console.log('map 아이템 갯수는? ',map.size)

//존재여부 확인 -key로 확인(boolean)
console.log('map에 key1이 있니? ',map.has('key1'))  
console.log('map에 key6이 있니? ',map.has('key6'))  

//순회, 반복
map.forEach((aa, bb) => console.log(aa,bb)); // (value, key, map)
console.log('map.value는? ',map.values());
console.log('map.key는? ',map.keys());
console.log('map.key는? ',map.entries());

//찾기
console.log('key1의 value값은?', map.get('key1'));
console.log('key6의 value값은?', map.get('key6'));

//추가
map.set(1004);
console.log('1004추가 ',map); // 1004 => undefined  밸류가 없음
map.set('kiwi', '🥝');
console.log('key5의 키위 추가 ',map);

//삭제      - key값 이용(map은 항상 key 이용해서만 - 고유한 값이라서)
map.delete(1004);
console.log('1004 삭제', map);

//전부 삭제
map.clear();
console.log('전부 삭제', map);