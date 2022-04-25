// let user = {
//     name: 'Vasya',
//     age: 30,
// }

// ES5
// function Person(name, yearOfBirth) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     // this.calcAge = function () {
//     //     return new Date().getFullYear() - this.yearOfBirth;
//     // };
// }
//
// Person.prototype.calcAge = function () {
//     return new Date().getFullYear() - this.yearOfBirth;
// };
//
// function Teacher(name, yearOfBirth, subject) {
//     Person.call(this, name, yearOfBirth);
//     this.subject = subject;
// }
//
// console.log(Teacher.prototype.constructor);
//
// Teacher.prototype = Object.create(Person.prototype);
// console.log(Teacher.prototype.constructor);
// Teacher.prototype.constructor = Teacher;
// console.log(Teacher.prototype.constructor);
//
// var vasya = new Person('Vasya', 1990);
// var ann = new Teacher('Ann', 2000, 'Math');

// ES6

// class Person {
//     constructor(name, yearOfBirth) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//     }
//
//     calcAge() {
//         return new Date().getFullYear() - this.yearOfBirth;
//     }
// }
//
// class Teacher extends Person {
//     constructor(name, yearOfBirth, subject) {
//         super(name, yearOfBirth);
//         this.subject = subject;
//     }
// }

// let vasya = new Person('Vasya', 1990);
// let ann = new Teacher('Ann', 2000, 'Math');
