const githubCards = document.querySelector(".githubCard-container");


async function init(){
    const userDatas = await fetch("https://api.github.com/users")
    .then(res => res.json())
    for (const user of userDatas) {
        githubCards.innerHTML += 
        `
        <ul class= "user-cards">
            <li class= "user-img"><img src="${user.avatar_url}" alt=""></li>
            <li>${user.login}</li>
            <li>${user.age}</li>
            <li>${user.name}</li>
            <li>${user.bio}</li>
            <li>${user.followers_url} -- ${user.following_url} ${user.repos_url}</li>
            <li>${user.html_url}</li>
        </ul>
        `
    }
}

init();