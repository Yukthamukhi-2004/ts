.TypeAliases
.Interface
.Merging Types



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


