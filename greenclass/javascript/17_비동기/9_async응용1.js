//then이 중복으로 배치되고 더 복잡해짐 -> 깔끔하게
// 비동기적인 코드가 동기적(전차적)으로 보이게
// async 붙이면 비동기, 프로미스가 호출됨/ 내부를 동기적인 코드로 작성 가능하게


function getBanana(){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve('🍌')}, 3000)
    })
}
function getApple(){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve('🍎')}, 2000)
    })
}

//바나나와 사과를 함께 가지고 와서 배열로 만듦
async function fruits(){
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple]    
}

fruits()
    .then((aa)=>console.log(aa))


