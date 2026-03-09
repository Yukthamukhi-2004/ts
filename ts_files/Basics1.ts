.type interface
.type explicit
.basic primitive
.union
.object 
.literal types
.functions


//type inference
/* inference means understood,having idea,clue */
/* here ts decides types,cleaner code,less repetition */
let userName = "Max";
let age = 25;

const total = price * quantity; //it infers

//type explicit
/* defining specifically ,you decide the typee,more control,more predictable
need for explicit */

let yuktha: number = 25;
yuktha = 30; //allowed
yuktha = "hello"; //error

//Basic primitive types

let isvalid: boolean = true;
let Name: string = "Max";
let userAge: number = 34;

//Union Types
/* A varaible is allowed with 2 data types */
let userId: string | number = "abc";
userId = 123;

//Important
/* if i want to store only specific values in a varible */
type Role = "admin" | "user" | "editor";
let role: Role;

role = "admin";
role = "user";
role = "editor";
role = "abc"; //error-coz,not assigned above.which was restricted

function performance(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //.....Logic...
  }
}

//Object type

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

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
function add(a: number, b: number): number {
  return a + b;
}
const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
//as this function return nothing ,then use void

//ex2
function add1(a: number, b: number): number {
  const result = a + b;
  return result;
}

//ex3

/* difference in functions when used type & interface */

//type mathFunction=(a:number,b:number)=>number
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));
