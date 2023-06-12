function fetchEgg(chicken){
    // return new Promise((resolve, reject)=>{});
    return Promise.resolve(`${chicken} --> 🥚`);
};
function freyEgg(egg){
    return Promise.resolve(`${egg} --> 🍳`);
};
function getChicken(){
    //return Promise.resolve(`🌿 --> 🐔`);
    return Promise.reject(new Error('치킨을 가지고 올 수 없음!!'));
};

getChicken() // 🌿 --> 🐔
    // .catch((error)=>{
    //     console.log(error.name);
    //     return '🐔';
    // })
    .catch(()=> '🐔') // 대체값을 넣어줘서 에러가 나도 정상적으로 작동하게
    //.then( (chicken)=>{ return fetchEgg(chicken) } ) // 🌿 --> 🐔 --> 🥚
    .then(fetchEgg)
    // .then( (egg)=>{ return freyEgg(egg) } ) // 🌿 --> 🐔 --> 🥚 --> 🍳
    .then(freyEgg)
    // .then( (freyEgg)=>{ console.log(freyEgg) } )
    .then(console.log)
    //.catch((error)=>{ console.log(error.name) })