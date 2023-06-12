//문제1) 배열안의 특정 아이템을 교체해서 새로운 배열 만들기
//- 주어진 배열 수정하지 않음
// ['🍇','🍎','🍋','🍒','🍎']    - 사과를 바나나로 🍌

/*
function replace(aa,old,end){
    const replaced = Array.from(aa);
    for ( let i=0; i<replaced.length; i++ ){
        if(replaced[i] === old){
        replaced[i] = end;
        }
    }
    return replaced
}
*/
function replace(aa, old, end){
    return aa.map(item => {
        if(item === old){
        return end;
        } else {
        return item;
        }
    })
}
const aa = ['🍇','🍎','🍋','🍒','🍎'];
const result = replace(aa,'🍎','🍌');
console.log(result)


//문제2)  배열안에 특정 아이템이 몇개 있는지 알아오기
const bb = ['🥙','🍗','🍠','🍗','🧀','🥩','🍠','🍗','🍗'];
function count(bb, item){
    return bb.filter(value=> value === item).length;
}

const result2 = count(bb,'🍠');
console.log(result2)

/*function count(bb, item){
    let counter = 0; 
    for(let i=0; i<bb.length; i++ ){
        if(bb[i] ===  item){
        counter++
        }
    }
    return counter;
}*/





//문제3) 배열 2개에서 겹치는 아이템 만으로 새로운 배열 만듦
const arr1 = ['🍗','🍠','🍗','🍋','🍣','🧀', ]
const arr2 = ['🍇','🍣','🧀','🍎','🍋','🍒','🍎'];

function match(aa, bb){
    return aa.filter((item) => {
        return bb.includes(item);
    });
}

console.log(match(arr1,arr2));

// function match(aa,bb){
//     const result = [];
//     for(let i=0; i<bb.length; i++ ){
//         if(bb.includes(aa[i])){   //arr2배열에 arr1 아이템 겹치는게 있는지 하나씩 검사
//         result.push(aa[i]);
//         }
//     }
//     return result;
// }


//문제4) 5보다 큰(이상) 숫자들의 평균
const nums = [3, 8, 4, 5, 34, 15, 21];
const result3 = nums
    .filter( num => num > 5 ) // [ 8, 34, 15, 21 ]
    .reduce((sum, num, _ ,array) => sum += num / array.length, 0); // 사용하지 않는 인자는 _로 표기

console.log('result3', result3);