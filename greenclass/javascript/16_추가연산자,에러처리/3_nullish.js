// Nullish coalescing operator (??)   -  널리시 오퍼레이터
// Null 체크하는 깔끔한 방법

function print(msg){
    const text = msg  ?? '안녕하세요';
    console.log(text);
}

// || - 공백, undefined, null, 0 전부 false로 인식
// ?? - undefined, null인 경우에만 false로 인식
// aa ?? b ?? 'cc' - 이런식으로 &&, || 연산자와는 함께 사용할 수 없음

print('날씨가 흐려요');
print(undefined);
print(null);
print(0);