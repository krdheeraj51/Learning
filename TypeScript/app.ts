type Admin = {
  name: string;
  privileges: string[];

};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
type UnknownEmployee = Admin & Employee;

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:number,b:string):string;
function add(a:string,b:number):string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result= add('Dheeraj',' Kumar');
result.split(' ')

const fetchUserData ={
  id:'u1',
  name:'Max',
  job:{
    title:'CEO',
    description:'My Own company'
  }
}
console.log(fetchUserData?.job?.title);

const userInput='';
const stroredData=userInput ?? 'DEFAULT';
console.log(stroredData);

// function PrintEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name ::', emp.name);
//   if ('privileges' in emp) {
//     console.log('privilages ', emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('startDate ', emp.startDate);
//   }

// }
// PrintEmployeeInformation(e1);



// class Car {
//   drive() {
//     console.log('Driving .....')
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving car');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo :', amount)

//   }
// }
// type Vechile = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVechile(vechile: Vechile) {
//   vechile.drive();
//   if (vechile instanceof Truck) {
//     vechile.loadCargo(10000);
//   }
// }

// useVechile(v1);
// useVechile(v2);



// interface Bird {
//   type:'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type:'horse';
//   runningSpeed: number
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal:Animal){
//   let speed;
//   switch(animal.type){
//     case 'bird':
//       speed=animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed=animal.runningSpeed;

//   }
//  console.log("Moving speed ..",speed);

// }
// moveAnimal({type:'bird',flyingSpeed:20});


// // const userinputElement =<HTMLInputElement>document.getElementById('user-input')!;
// const userinputElement =document.getElementById('user-input')! as HTMLInputElement;
// userinputElement.value='Hi there'


// interface ErrorContainer{
//   [prop:string]:string;

// }
// const errorBag:ErrorContainer={
//   email:'Not a Valid email',
//   username:'Must start with a Capital Character'
// }