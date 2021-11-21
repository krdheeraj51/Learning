// const person:
//     {
//         name:string,
//         age:number,
//         hobbies:string[],
//         role:[number,string]

//     } =
// {
//     name: 'Dheeraj',
//     age: 30,
//     hobbies: ['sports', 'singing', 'writing'],
//     role: [3, 'artist'],
// };

enum Role{
    ADMIN, READ_ONLY, AUTHOR
}

const person={
    name:'Dheeraj',
    age:29,
    hobbies:['Reading','cooking'],
    role:Role.AUTHOR
}
console.log("person :::", person.role);
// person.role.push(4)
console.log("person :::", person.role);
for (const hobby of person.hobbies) {
    // console.log("hobby ::", hobby);
}

if(person.role=== Role.ADMIN){
    console.log('is Admin');
}
