/*
    자료구조(data Structure) 중 배열 (Array)
        - 순서(index)를 가지고 있음, 다양한 타입이 공존 -> 보완하기 위해 타입 배열이 있음
        - 연속적으로 이어져 있지 않음(일반적으로는 연속적으로 이어져 있음)
        - 오브젝트와 거의 동일
*/

//배열 생성 방법
let array1 = new Array(3);   //Array객체(클라스) 이용, 3개를 저장할 수 있는 배열 생성
console.log('array1는?',array1);

let array2 = new Array(1,2,3);  //Array객체(클라스) 이용, 실제 아이템 전달
console.log('array2는?',array2);

let array3 = Array.of(1,2,3,4);  //스태틱함수 이용(Array에서 제공하는 함수, 원하는 갯수만큼 아이템 무한정 추가)
console.log('array3는?',array3);

let array4 = [1,2,3,4,5]; // 오브젝트에서는 {}, 배열에서는 []
console.log('array4는?',array4);

let array5 = Array.from(array4); // 기존 배열로부터 새로운 배열을 만듦
console.log('array5는?',array5);

let array6 = Array.from('Monday');
console.log('array6는?',array6);
// 문자(캐릭터) 하나하나를 배열의 아이템으로
// iterable(순회, 반복이 가능)한 모든 것

// 오브젝트로 부터 배열을 만듦(js 배열은 오브젝트와 비슷)
let array7 = Array.from({
    0: '안',
    1: '녕',
    2: '히히',
    3: '키키',
    length: 4
});
console.log('array7는?',array7);