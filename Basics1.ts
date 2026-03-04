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

//Array Type
let hobbies: Array<string>; //Generic Type or
//let hobbies: string[];
hobbies = ["Sports", "Cooking", "Reading"];

//Adding types to functions

function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
} //as this function return nothing ,then use void

function add1(a: number, b: number): number {
  const result = a + b;
  return result;
}

//defining Funtion Types

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number,
) {
  calcFn(a, b);
}
calculate(2, 5, add1);
