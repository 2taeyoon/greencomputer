const feed = document.querySelector('.feed'); 


function getUserById(id){
    const URL =`https://jsonplaceholder.typicode.com/users/${id}`
    // 각 id에 해당하는 아이템들을 불러옴  
    return fetch(URL)
        .then(response => response.json())  //응답을 제이선으로 리턴
        .then((data) => data )
}



 createPost = async (post) => {  //각각의 게시물(.post) 만들어주는 함수 정의

    const wrap = document.createElement('div');
    const user = document.createElement('a');
    const msg = document.createElement('div');

    wrap.className = 'post';
    user.className = 'user';
    msg.className = 'msg';

    wrap.id = post.id;
    user.href= './user.html';
    //user.innerText = '@user'    //우선 고정으로
    //user.innerText = getUserById(post.userId)
    const userInfo = await getUserById(post.userId);
    user.innerText = `@ ${userInfo.username}`   //@ undefined
    msg.innerText = post.body;

    user.addEventListener('click', ()=>{
        localStorage.setItem('userId', post.userId);  
    })

    wrap.append(user,msg);
    feed.append(wrap);
}

function getAllPost(){
    const URL ='https://jsonplaceholder.typicode.com/posts'
    
    fetch(URL)
        .then(response => response.json())  //응답을 제이선으로 리턴
        .then((data) => {
            data.forEach((post) => {
                createPost(post)    //각각의 게시물(.post)로 만들어줄 함수 실행
            });
        } )
}

if(feed) {  //feed가 없는 user.html 에서는 실행되지 X
    getAllPost()
}