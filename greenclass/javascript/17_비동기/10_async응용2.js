function fetchEgg(chicken){
    //return new Promise((resolve,reject)=>{})
    return Promise.resolve(`${chicken} --> 🥚`)
}
function freyEgg(egg){
    return Promise.resolve(`${egg} --> 🍳`)
}
function getChicken(){
    //return Promise.resolve(`🌿 --> 🐔`) 
    return Promise.reject(new Error('치킨을 가지고 올 수 없음!!!'))
}

/*
function MakeEggFried(){
    return getChicken()  
        .catch((error)=> {console.log(error.name); return '🐔'}) 
        .then((chicken)=> { return fetchEgg(chicken)}) 
        .then((egg)=> freyEgg(egg))   
        .then(console.log) 
}  */
async function MakeEggFried(){
    let chicken;
    try {
        chicken = await getChicken();
    } catch (error) {
        console.log(error.name);
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    const data = await freyEgg(egg);
    return console.log(data); 
}