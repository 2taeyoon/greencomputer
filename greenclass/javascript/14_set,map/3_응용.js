// 문제1) 주어진 배열에서 중복을 제거하라!!
const fruits = ['🍇','🍎','🍋','🍇','🍎','🍇','🍋','🍎','🍎','🍒','🍋'];
const aa = [...new Set(fruits)];
console.log(aa);


// 문제2) 주어진 두 배열의 중복되지 않은 공통된 아이템만 담고있는 세트를 만들어라 
const array1 = [ 1, 2, 3, 4, 5, 2];
const array2 = [ 1, 2, 3, 3];

function commonFunc(arr1, arr2){
    const newArray =  arr1.filter((item)=> arr2.includes(item) );
    return [...new Set(newArray)];
}

console.log(commonFunc(array1,array2));