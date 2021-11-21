"use strict";
// interface Person{
//     name:string;
//     age:number;
//     greet(phrase:string):void;
// }
// let user1:Person;
// user1={
//     name:'Dheeraj',
//     age:27,
//     greet(phrase:string){
//         console.log(phrase +''+this.name);
//     }
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!!!!!');
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
//   user1.name='';
user1.greet('Hi there - I am');
console.log(user1);
