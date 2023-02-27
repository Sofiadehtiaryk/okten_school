// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'vasya', 'kokos1', 'kokos1@gmail.com', '380674782950'),
//     new User(2, 'kolya', 'kokos2', 'kokos2@gmail.com', '380674784350'),
//     new User(3, 'misha', 'kokos3', 'kokos3@gmail.com', '380674372950'),
//     new User(4, 'anna', 'kokos4', 'kokos4@gmail.com', '380674780950'),
//     new User(5, 'vika', 'kokos5', 'kokos5@gmail.com', '38067482950'),
//     new User(6, 'artem', 'koko6', 'kokos6@gmail.com', '380674782950'),
//     new User(7, 'bodya', 'kokos7', 'kokos7@gmail.com', '380674782950'),
//     new User(8, 'sonya', 'kokos8', 'kokos8@gmail.com', '380274782950'),
//     new User(9, 'mark', 'kokos9', 'kokos9@gmail.com', '380674722950'),
//     new User(10, 'ivan', 'kokos10', 'kokos10@gmail.com', '380674782920')
// ];
// console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(users.sort((a, b) => b.id - a.id)); // відсортував по спаданню бо в масиві айді ітак йдуть по зростанню

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clients = [
//     new Client(1, 'vasya', 'kokos1', 'kokos1@gmail.com', '380674782950', 10),
//     new Client(2, 'kolya', 'kokos2', 'kokos2@gmail.com', '380674784350', 9),
//     new Client(3, 'misha', 'kokos3', 'kokos3@gmail.com', '380674372950', 8),
//     new Client(4, 'anna', 'kokos4', 'kokos4@gmail.com', '380674780950', 3),
//     new Client(5, 'vika', 'kokos5', 'kokos5@gmail.com', '38067482950', 7),
//     new Client(6, 'artem', 'koko6', 'kokos6@gmail.com', '380674782950',6),
//     new Client(7, 'bodya', 'kokos7', 'kokos7@gmail.com', '380674782950', 5),
//     new Client(8, 'sonya', 'kokos8', 'kokos8@gmail.com', '380274782950',4),
//     new Client(9, 'mark', 'kokos9', 'kokos9@gmail.com', '380674722950',2),
//     new Client(10, 'ivan', 'kokos10', 'kokos10@gmail.com', '380674782920',1)
// ]
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients.sort((a, b) => a.order - b.order));

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model, author, year, maxSpeed, engine){
//     this.model = model;
//     this.author = author;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function (maxSpeed){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km  на годину`)
//     }
//     this.info = function (model, author, year, maxSpeed, engine){
//         console.log(`
//                 model - ${this.model} \n
//                 author - ${this.author} \n
//                 year - ${this.year} \n
//                 maxSpeed - ${this.maxSpeed} \n
//                 engine - ${this.engine}
//                 `);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (obj){
//         this.driver = obj;
//     }
// }
// let driver ={
//     name: 'vasya',
//     age: 18,
//     drivingExperience: '8 month'
// }
// let car = new Car('lanos', 'Daewoo', 2010, 200,'2.0')
// car.drive();
// car.info();
// car.increaseMaxSpeed(220);
// car.changeYear(2011);
// car.info();
// car.addDriver(driver);
// console.log(car);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Car{
//     constructor(model, author, year, maxSpeed, engine) {
//         this.model = model;
//         this.author = author;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive (maxSpeed){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km  на годину`)
//     }
//     info (model, author, year, maxSpeed, engine){
//         console.log(`
//                 model - ${this.model} \n
//                 author - ${this.author} \n
//                 year - ${this.year} \n
//                 maxSpeed - ${this.maxSpeed} \n
//                 engine - ${this.engine}
//                 `);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver (obj){
//         this.driver = obj;
//     }
// }
//
// let driver ={
//     name: 'vasya',
//     age: 18,
//     drivingExperience: '8 month'
// }
//
// let smtCar = new Car('lanos', 'Daewoo', 2010, 200,'2.0')
// smtCar.drive();
// smtCar.info();
// smtCar.increaseMaxSpeed(220);
// smtCar.changeYear(2011);
// smtCar.info();
// smtCar.addDriver(driver);
// console.log(smtCar);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cinderellas = [
    new Cinderella('Olena', 18, 34),
    new Cinderella('Sonya', 19, 35),
    new Cinderella('julia', 22, 36),
    new Cinderella('katya', 50, 37),
    new Cinderella('Ira', 37, 38),
    new Cinderella('Masha', 21, 39),
    new Cinderella('Cinderella', 24, 40),
    new Cinderella('Vika', 44, 41),
    new Cinderella('Alina', 33, 42),
    new Cinderella('Nastya', 32, 43)
];
console.log(cinderellas);
class Prince extends Cinderella{}
let prince = new Prince('MC Petya', 25, 40);
console.log(prince);

for (let i = 0; i < cinderellas.length; i++) {
    if(cinderellas[i].size === prince.size){
        console.log(`${cinderellas[i].name} повинна бути з ${prince.name}`);
    }
}

console.log(cinderellas.find(value => value.size === prince.size));