//문제1) 배열알의 특정 아이템을 교체해서 새로운 배열 만들기
//- 주어진 배열 수정하지 않음
// ['🍇','🍎','🍋','🍒','🍎']    - 사과를 바나나로 🍌

/* 재사용성이 떨어짐(딸기, 바나나 밖에 안됨)
function replace(aa) {
    const replaced = Array.from(aa);
    for (let i = 0; i < replaced.length; i++) {
        if (replaced[i] === '🍎') {
            replaced[i] = '🍌';
        }
    }

    return replaced;
}

const aa = ['🍇','🍎','🍋','🍒','🍎'];
const result = replace(aa);
console.log('result는?',result); */

function replace(aa, old, newitem) {
    const replaced = Array.from(aa);
    for (let i = 0; i < replaced.length; i++) {
        if (replaced[i] === old) {
            replaced[i] = newitem;
        }
    }
    return replaced;
}

const aa = ['🍇', '🍎', '🍋', '🍒', '🍎'];
const result = replace(aa, '🍒', '🍷');
console.log('result는?', result);



// 문제2) 배열안에 특정 아이템이 몇개 있는지 알아오기
const bb = ['🎈', '🔒', '💸', '🤿', '💸', '🎴', '💸'];

function count(bb, moneyItem) {
    let counter = 0;
    for (let i = 0; i < bb.length; i++) {
        if (bb[i] === moneyItem) {
            counter++;
        }
    }
    return counter;
}

const result2 = count(bb, '💸');
console.log('result2는?', result2);

// 문제3) 배열 2개에서 겹치는 아이템만으로 새로운 배열을 만듦
const arr1 = ['💸', '🎴', '🎴', '🤿', '🍋'];
const arr2 = ['🍎', '💸', '💸', '🎴', '🤿', '🍒', '🍷'];

function match(aa, bb) {
    const result = [];
    for (let i = 0; i < bb.length; i++) {
        if (bb.includes(aa[i])) { // bb의 array에 aa와 같은 것이 있는지 검사
            result.push(aa[i]); // 같은 것이 있다면 aa에 집어 넣어
        }
    }
    return result;
}

console.log(match(arr1, arr2));