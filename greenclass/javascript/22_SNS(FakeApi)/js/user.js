const updateProfile = (userData) => {
    const profile = document.querySelector('.profile');
    let user = `
        <h2 class="name"> ${userData.name} (@ ${userData.username})</h2>
        <div>
        <span>E-mail : </span>
        <a class="email" href="mailto:${userData.email} "> ${userData.email}</a>
        </div>
        <div>
        <span>Website : </span>
        <a class="website"  href="http://${userData.website}" target="_blank">${userData.website}</a>
        </div>
    `;
    profile.innerHTML=user;
}


const loadUserProfile = async () => {
    const userId = localStorage.getItem('userId');
    const userInfo = await getUserById(userId)
    //console.log(userInfo)
    updateProfile(userInfo);
}
loadUserProfile();