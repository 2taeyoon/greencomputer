// Math

console.log('절대값으로 반환',Math.abs(-10.22)); // 절대값으로 반환
console.log('소수점 이하를 무조건 올림',Math.ceil(1.148)); // 2
console.log('소수점 이하를 무조건 내림',Math.floor(1.548)); // 1
console.log('소수점 이하를 반올림',Math.round(1.568)); // 2
console.log('소수점 이하를 반올림',Math.round(1.468)); // 1
console.log('정수만 반환',Math.trunc(1.589)); // 1

// 최대, 최소값 찾기
console.log('집합중 최대값',Math.max(1,3,-4));
console.log('집합중 최소값',Math.min(1,3,-4));

// 거듭제곱
console.log('3의 3제곱',3**3) // 3*3*3
console.log('3의 3제곱',Math.pow(3,3)); // 3*3*3

// 제곱근 (숫자A를 제곱하여 B가 되었을 때 A값)
console.log('9의 제곱근',Math.sqrt(9));

// 랜덤
console.log('랜덤값 반환 9의 제곱근',Math.random()); // 0~1 미만 값
console.log('랜덤값 반환 1~10의 값',Math.random()*10+1); // 1~10의 값(원래는 0~9의 값인데 +1 해줌)
console.log('랜덤값 반환 0~4의 값',Math.random()*4); // 0~4의 값
console.log('랜덤값 반환 0~4의 값',Math.floor(Math.random()*4)); // 0~4의 값