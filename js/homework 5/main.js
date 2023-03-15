// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const sq = (a, b) => a * b;
// console.log(sq(10, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const sq = (r) => Math.PI * r ** 2;
// console.log(sq(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const sq = (r, h) => (r+h) * r * 3.14;
// console.log(sq(5, 15));

// - створити функцію яка приймає масив та виводить кожен його елемент
// const loggerXXX = (arr) => {
//   for (const item of arr) {
//     console.log(item);
//   }
// }
// loggerXXX([123, 666, 3456, 22]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const pCreator = (text) => {
//   document.write(`<p>${text}</p>`);
// }
// pCreator('test_text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const liCreator = (text) => {
//   document.write(`<ul>`)
//   document.write(`<li>${text}</li>`)
//   document.write(`<li>${text}</li>`)
//   document.write(`<li>${text}</li>`)
//   document.write(`</ul>`)
// }
// liCreator('test_text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const liCreator = (text, count) => {
//   document.write(`<ul>`)
//   for (let i = 0; i < count; i++) {
//     document.write(`<li>${text}</li>`)
//   }
//   document.write(`</ul>`)
// }
// liCreator('test_text', 12);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const liCreator = (arr) => {
//   document.write(`<ul>`)
//   for (let i = 0; i < arr.length; i++) {
//     document.write(`<li>${arr[i]}</li>`)
//   }
//   document.write(`</ul>`)
// }
// liCreator(['test_text', 2345, true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const arrOfObj = [
//   { id: 1, name: 'Tamara', age: 13 },
//   { id: 2, name: 'Anna', age: 100 },
//   { id: 3, name: 'Petro', age: 30 },
// ]
// const blockCreator = (arr) => {
//   for (const item of arr) {
//     document.write(`<hr/>`)
//     document.write(`<div>id: ${item.id}<br/>name: ${item.name}<br/>age: ${item.age}<br/></div>`)
//     document.write(`<hr/>`)
//   }
// }
// blockCreator(arrOfObj);

// - створити функцію яка повертає найменьше число з масиву
// const min = (arr) => {
//   let result = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (result > arr[i]) {
//       result = arr[i];
//     }
//   }
//   return result;
// }
// console.log(min([-112, 5467, -34, 44, 7]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// const sum = (arr) => {
//   let result = 0;
//   for (const num of arr) {
//     result += num;
//   }
//   return result;
// }
// console.log(sum([12, 3, 5]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap = (arr, index1, index2) => {
//   const num1 = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = num1;
//   return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//   for (const item of currencyValues) {
//     if (item.currency === exchangeCurrency) {
//       return sumUAH / item.value;
//     }
//   }
// }
// console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const foo = (...arr) => {
//   let min = arr[0];
//   let max = arr[0];
//   for (const num of arr) {
//     if(min > num) min = num;
//     if(max < num) max = num;
//   }
//   console.log(`MAX: ${max}`);
//   return min;
// }
// const min = foo(123, 55, 34, -3, 555, -33);
// console.log(min);