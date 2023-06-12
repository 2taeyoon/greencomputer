// JSON - JS에서 서버와 주고받기 편하게 만든 문자열, 오브젝트 형태의 텍스트 포맷

const nuri = {
    name: 'nuri',
    age: 3,
    type: 'cat',
    eat: () => { console.log('냠냠') }
}

console.log('오브젝트 nuri는? ',nuri);

const jj = JSON.stringify(nuri);
console.log('JSON.stringify(nuri)는?', jj);
/*
    JSON.stringify(오브젝트) - 오브젝트를 json으로 변환(serializing)
        - 함수는 포함되지❌, 숫자를 빼고 다 문자열 형식(따옴표)
*/

const oo = JSON.parse(jj);
// JSON.parse(json); // JSON을 오브젝트 객체로 뱐환
console.log('JSON.parse(jj)는? ',oo);