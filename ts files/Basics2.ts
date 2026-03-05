.TypeAliases
.Interface
.Narrowing with Optional Properties
.Merging Types
.Enum
.Optional parameter
.Default Parametes


import { logMsg } from './someModule';


//Type Aliases(Custom Types)
/*.aliases make code clean
  .doesnt looks complex
  .can be reusable
  .use type key word
*/
//ex1
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;
//we can reuse this AddFn ,where the function is used.

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}
calculate(2, 5, add);

//ex2
type StringOrNum = string | number;

let userID: StringOrNum = "abc1";
userID = 123;

//ex3
type stringOrNumber= (string | number )[]
type Guitarist={
  name?:string,
  active:boolean,
  albums:stringOrNumber,
}



//Interface

/* .this used specifically to define object types
   .interface keyword is used
   .similar to aliases
 */
interface Credentials {
  password: number;
  email: string;
}
let cred: Credentials;

cred = {
  password: 34567,
  email: "yukthamukhi",
};

//Narrowing with Optional Properties

interface Guitarist{
  name:string,
  active?:boolean,
  albums:(string | number)[]
}

let jp:Guitarist={
  name:'Jimmy',
  active:true,
  albums:['I','II','IV']
}

const greetGuitarist=(guitarist:Guitarist)=>{
  if(guitarist.name){
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  
}
console.log(greetGuitarist(jp))

//Merging Types

//ex1
type Admin = {
  permission: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permission: ["login"],
  userName: "Max",
};

//ex2
interface Admin1 {
  permission1: string[];
}
interface AppUser1 {
  userName1: string;
}
interface AppAdmin1 extends Admin1, AppUser1 {}

let admin1: AppAdmin1;

admin1 = {
  permission1: ["login"],
  userName1: "Max",
};

//Enum
/* Unlike most typescript feature,Enums are not a type-level addition to 
js,but smtg added to the lang and runtime. */

enum Grade{
  U=1,
  D,
  C,
  A,
  B,
}
console.log(Grade.U)

//Optional Parameters

const addAll=(p:number,q:number,r?:number):number=>{
     if(typeof r !== 'undefined'){
        return p+q+r
     }
     return p+q
}

//default param value

const sumAll=(a:number=10,b:number,c:number=2):number=>{
  return a+b+c

}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(undefined,3))

//Rest Parameters
const total = (a:number,...nums:number[]):number=>{
  return a+nums.reduce((prev,curr)=>prev+curr)
}
logMsg(total(10,2,3,4))


//never type 
/* two use cases for never types : 1. errors in functions
                                  2. for infinite loops
 */
//1
const createError =(errMsg:string):never=>{
  throw new Error(errMsg)
}

//2
const infinite=()=>{
  let i:number=1
  while (true){
    i++
    if (i>100) break
  }
}

//3
//custom type guard
const isNumber=(value:any):boolean=>{
  return typeof value === 'number'? true :false
}
//use of the never type
const numberOrString=(value:number | string):string=>{
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen!')
}
