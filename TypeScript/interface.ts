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

// }

// user1.greet('Hi thee I am ');

/**
 * using interface with class
 */
// interface Greetable{
//     name:string;
//     greet(phrase:string):void;
// }

// class Person implements Greetable{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
//     greet(phrase:string){
//         console.log(phrase +''+this.name)

//     }
// }

// let user1:Greetable;
// user1=new Person('Dheeraj');
// user1.greet('Hi I am -');

// console.log(user1)

interface Greetable {
  name?: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }

  }

  greet(phrase: string) {
    if(this.name){
      console.log(phrase + ' ' + this.name);
    }else{
      console.log('Hi!!!!!')
    }
    
  }
}

let user1: Greetable;

user1 = new Person();
//   user1.name='';

user1.greet('Hi there - I am');
console.log(user1);