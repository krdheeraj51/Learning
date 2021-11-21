"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Dheeraj',
    age: 29,
    hobbies: ['Reading', 'cooking'],
    role: Role.AUTHOR
};
console.log("person :::", person.role);
// person.role.push(4)
console.log("person :::", person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log("hobby ::", hobby);
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
