// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function fool(a,b){
//     return a*b;
// }
// console.log(fool(3,4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function radius(r){
//     return r**2;
// }
// console.log(radius(2))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(h, r){
//     let s1 = 2 * 3.14 * h;
//     let s2 = 2 * 3.14 * r**2;
//     return  s1 + s2;
// }
// console.log(area(7,9))
// - створити функцію яка приймає масив та виводить кожен його елемент
// function user (arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//  user( ['sofia', 'anna', 'sasha', 'oksana']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(word1, word2, word3){
//     document.write(`<p>${word1} ${word2} ${word3}</p>`);
// }
// text('hello', 'sofia','dehtiaruk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(li){
//     document.write(`<ul>
// <li>${li}</li>
// <li>${li}</li>
// <li>${li}</li>
// </ul>`)
// }
// foo('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, num) =>{
//     document.write(`<ul>`);
//     for(let i = 1; i <= num; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('text',3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  let arr = ['sofia', true, 'alina', 27, false ,13,];
//  function foo(arr){
//     document.write(`<ul>`);
//        for (let i = 0; i < arr.length; i++) {
//            document.write(`<li>${arr[i]}</li>`);
//        }
//     document.write(`</ul>`);
//  }
//  foo(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id:1,
//         name:'sofia',
//         age: 18
//     },
//     {
//         id:2,
//         name:'oleg',
//         age: 28
//     },
//     {
//         id:3,
//         name:'maks',
//         age: 19
//     }
//
// ];
    // function foo(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //     document.write(`<div>`);
    //     document.write(`<div>`);
    //         for (const arrKey in arr[i]) {
    //             document.write(`${arrKey}: `);
    //             document.write(`${arr[i][arrKey]}  |  `);
    //         }
    //         document.write(`</div>`);
    //     }
    // }
    // foo(arr);

// - створити функцію яка повертає найменьше число з масиву
//  let arr = [4, 6, 3, 5, 66, 22];
// let foo = (arr) =>{
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(min > arr[i]){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(foo(arr));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let arr = [4, 6, 3, 5, 66, 22];
let foo = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(foo(arr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {

}
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
