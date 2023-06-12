export let count = 0;
export function increase(){ 
    count++;
    console.log(count);
};
// 외부로 노출시킬 부분만 export 해줌