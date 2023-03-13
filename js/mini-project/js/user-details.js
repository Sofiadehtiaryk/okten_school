// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку
// post-details.html, котра має детальну інфу про поточний пост.
let user = JSON.parse(localStorage.getItem('user')) ;

console.log(user);

let main = document.getElementsByClassName('main')[0];
let btn = document.getElementsByClassName('btn')[0];
let list = document.getElementsByClassName('list')[0];

let info = (user) => {
    let divInfo = document.createElement('div');
    divInfo.classList.add('info');
    main.append(divInfo);

    let arr = Object.values(user);
    let keys = Object.keys(user);
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "object"){
            info (arr[i]);
        }
        else{
            let p = document.createElement('p');
            p.innerText = `${keys[i]}: ${arr[i]}`;
            divInfo.append(p);
        }
    }
}
info(user);

let buttonPosts = document.createElement('button');
buttonPosts.innerText = 'click me';
buttonPosts.classList.add('clickMe')
btn.append(buttonPosts);

buttonPosts.onclick = () =>{
    buttonPosts.style.display = 'none';
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(resp => resp.json())
        .then(post =>{
            for (const postElement of post) {
                let divPost = document.createElement('div');
                divPost.classList.add('post');
                list.appendChild(divPost);

                let pPost = document.createElement('p');
                pPost.innerText = `${postElement.title}`;
                divPost.appendChild(pPost);

                let aPost = document.createElement('a');
                aPost.innerText = 'postElement ';
                aPost.href = 'post-details.html';
                divPost.appendChild(aPost);

                aPost.onclick = () =>{
                    localStorage.setItem('post', JSON.stringify(postElement));
                }
            }
        })

}