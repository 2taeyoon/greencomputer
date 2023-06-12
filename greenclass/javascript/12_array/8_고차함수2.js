

const nums = [1, 2, 3, 4, 5]

//배열.map(함수)  -배열의 각 요소가 특정 논리(함수)에 의해 다른 요소로 지정(map)
let result = nums.map(function(item){
    return item*3
})
console.log('map을 이용해봅시다! ',result )

result = nums.map(function(item){   //짝수인 경우만 2배로 맵핑
    if(item % 2 === 0){
        return item*2
    } else {
        return item
    }
})
console.log('조건문이 추가된 map ',result )

result = nums.map((item)=> ['🍕','🥤'])
console.log('각각의 배열 아이템을 새로운 내용(배열)으로 ',result )

result = nums.flatMap((item)=> ['🍕','🥤'])
console.log('flatMap으로 적용해봅시다!!',result )
//배열.flatMap(함수)  -중첩된 배열을 낱개로 만들어서 새로운 배열로

// 응용
result = ['rainy', 'morning'].map((ttt)=> ttt.split(''));
console.log('문자열 map이용',result)

result = ['rainy', 'morning'].flatMap((ttt)=> ttt.split(''));
console.log('문자열 flatMap 이용',result)  //알파벳 하나씩 배열값으로
//문자열.split()   -문자열을 분할하는 매서드(배열로 담아서 리턴 )


// 배열.sort() 
// 문자열 형태의 오름차순(1,2,3,4 ..../  a,b,c,d.... )으로 요소 정렬
// 기존 배열을 변경 (새로 만드는거 ❌)
const texts = [ 'zoo', 'hi', 'abc']
texts.sort();
console.log('sort를 적용',texts)    //알파벳 순서대로(오름차순)

const numbers = [ 10, 8, 5, 1, 17, 21]
numbers.sort();
console.log('numbers배열에 sort 적용',numbers) 
//17일 5보다 먼저 나옴 ㅜㅜ

numbers.sort((a,b)=>b-a);
console.log('(a,b)=>a-b 이용해서 sort 적용',numbers) 
// a-b  : 순서대로 a,b를 넣고 위치를 이동시켜서 올림차순으로 만든다, 내부 알고리즘이 작동
// <0 오름차순(a-b),   >0 내림차순(b-a)


// reduce 
result = [1,2,3,4,5].reduce((sum,value)=>{
    sum += value;
    return sum
},0) 
console.log('reduce해준 값은? ',result);
//배열.reduce((합해진값, 밸류, index, array)=>{ 실행구 }, 합해진값의초기값)