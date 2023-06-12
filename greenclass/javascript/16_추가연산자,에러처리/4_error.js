// 에러를 처리하는 방법
// try catch finally

function readFile(path){
    throw new Error('에러 발생!!'); // 강제로 에러 발생 - app crashed!! - 이렇게 죽어버리지 않게 막아줄거야!
    return '파일의 내용';
};

function processFile(path){
    let content;
    try {   // 에러나는 함수 넣고
        content = readFile(path);
    } catch(error) { // 에러가 났을 때 처리방법
        console.log('error.name?', error.name);
        console.log('error.message?', error.message);
        console.log('error.stack?', error.stack); // 에러가 나온 경로(흐름)
        content = '대신!!!'; // readFile 함수가 결과값을 리턴하지 못할 때 강제로 내용을 넣어줌
    } finally {
        console.log('finally는 성공하든 실패하든 마지막으로 리소스 정리'); // 에러에 관련된 거를 정리하기 위해서 하는 것
    }
    const result = 'hi!!!' + content;
    return result;
};

const result = processFile('경로');
console.log(result);