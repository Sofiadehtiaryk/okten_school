// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3
let x = 0;
if (x!==0){
    console.log('Вірно');
}
else{
    console.log('Не вірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
let time = 13;
if (time >= 0 && time < 15){
    console.log('перша частина години');
}
else if (time >= 15 && time < 30 ){
    console.log('друга частина години');
}
else if (time >= 30 && time < 45 ){
    console.log('третя частина години');
}
else if (time >= 45 && time < 60 ){
    console.log('четверта частина години');
}
else {
    console.log(Error);
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = 17;
if (day >= 1 && day < 11){
    console.log('перша половина ');
}
else  if (day >= 11 && day < 21){
    console.log('друга половина');
}
else  if (day >= 21 && day < 32){
    console.log('третя половина');
}
else  {
    console.log('Error');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch ('6'){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Error');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstnumber = +prompt('enter first number:');
let secondnumber = +prompt('enter second number');
if (firstnumber > secondnumber){
    console.log('the first number is greater than the second');
}
else if (firstnumber < secondnumber){
    console.log('the second number is greater than the first')
}
else if (firstnumber === secondnumber){
    console.log('the numbers are equal')
}
else {
    console.log('Error');
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть
//     код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподібні, тобто приводиться до false)
//

let x = undefined;
x = x || 'default';
console.log(x);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
let oursesAndDurationArray0 = coursesAndDurationArray[0];
if (oursesAndDurationArray0.monthDuration >= 5){
    console.log('super')
}
let oursesAndDurationArray1 = coursesAndDurationArray[1];
if (oursesAndDurationArray1.monthDuration >= 5){
    console.log('super')
}
let oursesAndDurationArray2 = coursesAndDurationArray[2];
if (oursesAndDurationArray2.monthDuration >= 5){
    console.log('super')
}
let oursesAndDurationArray3 = coursesAndDurationArray[3];
if (oursesAndDurationArray3.monthDuration >= 5){
    console.log('super')
}
let oursesAndDurationArray4 = coursesAndDurationArray[4];
if (oursesAndDurationArray4.monthDuration >= 5){
    console.log('super')
}
let oursesAndDurationArray5 = coursesAndDurationArray[5];
if (oursesAndDurationArray5.monthDuration >= 5){
    console.log('super')
}