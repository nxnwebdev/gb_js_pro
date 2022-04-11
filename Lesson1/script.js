// var name = 'Vasya';
// var age = 30;
//
// age = {};
//
// console.log(age);

// let name = 'Vasya';
// const age = 30;
//
// age = {};
//
// console.log(age);

// let a = 1;
// var b = 2;
// {
//     let a = 2;
//     var b = 5;
//     console.log(a);
//     console.log(b);
// }
//
// console.log(a);
// console.log(b);

// function passTest(result) {
//     if (result) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(false);

// function passTest(result) {
//     let firstName;
//     let yearOfBirth;
//
//     if (result) {
//         firstName = 'John';
//         yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(true);

// var i = 23;
//
// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i);

// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i);

// 'use strict';
// function a() {
//     'use strict';
//     var b = 5;
//     let c = 10;
//     d = 20;
// }
// a();
//
// // console.log(b);
// // console.log(c);
// // console.log(d);

// var firstName = 'John';
// var lastName = 'Smith';
// var yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2022 - year;
// }
//
// console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '. Ему сейчас ' + calcAge(yearOfBirth));

// const firstName = 'John';
// const lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2022 - year;
// }
//
// console.log(`${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);

// const str = `${firstName} ${lastName}`;
//
// console.log(str);
// console.log(str.startsWith('J'));
// console.log(str.endsWith('th'));
// console.log(str.includes('n S'));
// console.log(`${str} `.repeat(5));

// const calcAge = () => {
//     return 6;
// };
// const calcAge = (x) => {
//     return 6 + x;
// };
// const calcAge = x => 6 + x;

// const calcAge = x => 6 + x;

// const calcAge = (x, y = 0) => {
//     return 6 + x - y;
// };
//
// // console.log(calcAge(4, 2));
// console.log(calcAge(4));

// var box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         // var _this = this;
//         // document.getElementById('green').addEventListener('click', function () {
//         //     console.log(_this);
//         //     console.log('Box number ' + _this.position + ' and color ' + _this.color);
//         // });
//         // document.getElementById('green').addEventListener('click', function () {
//         //     console.log(this);
//         //     console.log('Box number ' + this.position + ' and color ' + this.color);
//         // }.bind(this));
//         document.getElementById('green').addEventListener('click', () => {
//             console.log(this);
//             console.log('Box number ' + this.position + ' and color ' + this.color);
//         });
//     },
// };
//
// box.clickMe();
//
// var arr = ['John', 25];
// var name = arr[0];
// var age = arr[1];
//
// console.log(name, age);

// const arr = ['John', 25, true];
// // let [name, age] = arr;
// let [name,, isAdmin] = arr;
//
// // console.log(name, age);
// console.log(name, isAdmin);

// const obj = {
//     firstName: 'John',
//     lastName: 'Snow',
//     colors: ['white', 'black'],
// };
//
// // let { firstName, lastName, colors } = obj;
// //
// // console.log(firstName, lastName, colors);
//
// let { firstName: fn, lastName: ln, colors: [a, b] } = obj;
//
// console.log(fn, ln, a, b);
