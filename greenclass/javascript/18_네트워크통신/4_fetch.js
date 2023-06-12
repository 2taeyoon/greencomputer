// https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/users/3')
    .then((response) => response.json()) // 응답(response)을 받게 되면 사용할 수 있는 형태로 변환됨
    .then((data) => {
        console.log(data);
        console.log('이메일 주소 ', data.email);
        console.log('거리 주소 ',data.address.street);
    })
    .catch((error) => {
        console.error('실패함 ㅠㅠ', error);
    });