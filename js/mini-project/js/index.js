// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
let divMain = document.createElement('div');
divMain.classList.add('main');
document.body.appendChild(divMain);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users =>{
        let arr = [];
        for (const user of users) {
            arr.push(user);
        }
        for (const arrElement of arr) {
            let divElement = document.createElement('div');
            divElement.classList.add('box');
            divMain.appendChild(divElement);

            let pElement = document.createElement('p');
            pElement.innerText =`id: ${arrElement.id} \n name: ${arrElement.name}`;
            divElement.appendChild(pElement);

            let divA = document.createElement('div');
            divA.classList.add('aBox');
            divElement.appendChild(divA);

            let aElement = document.createElement('a');
            aElement.innerText = 'all information about this user';
            aElement.href = 'user-details.html';
            divA.appendChild(aElement);

            aElement.onclick =() =>{
                localStorage.setItem('user', JSON.stringify(arrElement));
            }


        }
    })
