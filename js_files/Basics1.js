"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type inference
/* inference means understood,having idea,clue */
/* here ts decides types,cleaner code,less repetition */
let userName = "Max";
let age = 25;
const total = price * quantity; //it infers
//type explicit
/* defining specifically ,you decide the typee,more control,more predictable
need for explicit */
let yuktha = 25;
yuktha = 30; //allowed
yuktha = "hello"; //error
//Basic primitive types
let isvalid = true;
let Name = "Max";
let userAge = 34;
//Union Types
/* A varaible is allowed with 2 data types */
let userId = "abc";
userId = 123;
let role;
role = "admin";
role = "user";
role = "editor";
role = "abc"; //error-coz,not assigned above.which was restricted
function performance(action, role) {
    if (role === "admin" && typeof action === "string") {
        //.....Logic...
    }
}
//Object type
let user;
user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc",
};
//Literal Types
//ex1
let userName1 = "Dave" | "John" | "Amy"; //any of values valid for username
userName1 = "Rechal"; //error
let hobbies = ["Sports", "Cooking", "Reading"];
// functions
//ex1
function add(a, b) {
    return a + b;
}
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
//as this function return nothing ,then use void
//ex2
function add1(a, b) {
    const result = a + b;
    return result;
}
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//# sourceMappingURL=Basics1.js.map