const obj = {
    name: '누리',
    age: 4
}

// 코딩하는 시점에 정적으로 속성에 접근(이미 코딩된 파일 내용을 실행)
console.log(obj.name); // value 값을 얻을 수 있음

// 동적으로 속성에 접근 (함수코드를 실행하는 단계)
function getValue(a,key){
    // return a.key; // undefined
    return a[key]; // 대괄호 표기법
}
console.log('getValue 실행',getValue(obj,'age')); // '' 안에 key 값을 넣어야한다

// 동적으로 속성 추가
function addKey(aa,bb,cc){
    obj['job'] = cc;
}
addKey(obj,'job', 'cute');
console.log('addKey 실행', obj);

// 동적으로 속성 삭제
function deleteKey(a,b){
    delete a[b];
}
deleteKey(obj, 'age');
console.log('deleteKey 실행', obj);