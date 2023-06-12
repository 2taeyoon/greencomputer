function getBanana(){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve('🍌')}, 3000) // 3초 후에 '🍌'를 resolve하는 Promise를 반환
    })
}

function getApple(){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve('🍎')}, 2000) // 2초 후에 '🍎'를 resolve하는 Promise를 반환
    })
}

function getKiwi(){
    return Promise.reject(new Error('키위는 없어요 ㅠㅠ')) // 에러를 발생시키는 Promise를 반환
}


// 바나나와 사과를 함께 가지고 와서 배열로 만듦
getBanana()
    .then((banana)=> getApple()
        .then((apple)=> [banana, apple])) // getBanana()와 getApple()의 resolve 결과를 배열로 만들어 반환
    .then(console.log)  // 3초 + 2초 -> 총 5초 시간 걸림


// 한 번에 모든 promise들을 실행(병렬적으로)
Promise.all([getBanana(),getApple()])
    .then((fruits) => console.log('all- ',fruits)) // getBanana()와 getApple()의 resolve 결과를 배열로 만들어 반환
    // 3초 -> 가장 오래 걸리는 비동기 작업인 getBanana()이 끝날 때까지 대기

Promise.all([getBanana(),getApple(),getKiwi()])
    .then((fruits) => console.log('all-error ',fruits)) // 출력되지 않음 (에러 발생)
    .catch(console.log) // 에러가 발생한 경우, catch를 통해 처리

// promise들 중에 가장 빨리 실행되는 것만
Promise.race([getBanana(),getApple()]) 
.then((fruits) => console.log('race- ',fruits)) // getApple()의 resolve 결과인 '🍎'만 출력 (가장 빨리 끝나는 작업)

// 모든 결과에 대해서 알아보고 싶을 때
Promise.allSettled([getBanana(),getApple(),getKiwi()])
    .then((fruits) => console.log('allSettled ',fruits)) // getBanana(), getApple(), getKiwi()의 결과를 배열로 만들어 반환
    // getKiwi()는 에러가 발생하여 reject 상태로 종료되었지만, allSettled()는 모든 Promise의 결과를 반환
    .catch(console.log) // 따로 출력되지 않음 (에러 발생)

    
/*
    위 코드에서 getBanana(), getApple(), getKiwi() 함수들은 각각 3초, 2초 후에 비동기적으로 실행되고,
    '🍌', '🍎'를 resolve하는 Promise와 에러를 발생시키는 Promise를 반환합니다.

    Promise.all: 배열에 포함된 모든 Promise들이 성공적으로 resolve될 때까지 기다린 뒤, 모든 Promise의 결과를 배열로 반환하는 메서드입니다
    위 코드에서는 getBanana()과 getApple() 두 개의 Promise를 배열로 전달하여 사용하였습니다.
    이 경우, getBanana()과 getApple() 함수들이 각각 3초와 2초 후에 비동기적으로 실행되므로, 모두 resolve되기까지 총 3초가 소요됩니다.
    그 후, 두 Promise의 결과가 배열로 반환되어 fruits 변수에 저장되고, 이를 출력합니다.

    Promise.race: 배열에 포함된 여러 개의 Promise들 중에서 가장 먼저 resolve되거나 reject되는 Promise의 결과만 반환하는 메서드입니다.
    위 코드에서는 getBanana()과 getApple() 두 개의 Promise를 배열로 전달하여 사용하였습니다.
    이 경우, getBanana()과 getApple() 함수들이 각각 3초와 2초 후에 비동기적으로 실행되므로,
    가장 먼저 resolve되는 getApple()의 결과만 반환되어 fruits 변수에 저장되고, 이를 출력합니다.

    Promise.allSettled: 배열에 포함된 모든 Promise들이 resolve되거나 reject될 때까지 기다린 뒤,
    각 Promise의 결과 및 상태를 객체의 배열로 반환하는 메서드입니다.
    위 코드에서는 getBanana(), getApple(), getKiwi() 세 개의 Promise를 배열로 전달하여 사용하였습니다.
    이 경우, getBanana()과 getApple() 함수들이 각각 3초와 2초 후에 비동기적으로 실행되고,
    getKiwi() 함수는 에러를 발생시켜 reject됩니다. 따라서, 세 개의 Promise들이 모두 settle되기까지 기다린 뒤,
    각각의 결과 및 상태를 객체의 배열로 반환되어 fruits 변수에 저장되고, 이를 출력합니다.

    .catch(): Promise에서 발생한 에러를 처리하는 메서드로, Promise.allSettled 메서드를 사용한 경우에만 호출됩니다.
    Promise.allSettled 메서드에 전달한 모든 Promise들이 settle되고 난 뒤, 하나 이상의 Promise가 reject된 경우,
    이를 처리하기 위해 .catch() 메서드를 사용할 수 있습니다. 위 코드에서는 getKiwi() 함수가 에러를 발생시켜 reject되기 때문에,
    .catch() 메서드가 호출되어 에러를 출력합니다.
*/