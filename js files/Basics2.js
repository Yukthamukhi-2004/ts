"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
TypeAliases.Interface.Merging;
Types;
//Type Aliases(Custom Types)
/*.aliases make code clean
  .doesnt looks complex
  .can be reusable
  .use type key word
*/
//ex1
function add(a, b) {
  const result = a + b;
  return result;
}
//we can reuse this AddFn ,where the function is used.
function calculate(a, b, calcFn) {
  calcFn(a, b);
}
calculate(2, 5, add);
let userID = "abc1";
userID = 123;
let cred;
cred = {
  password: 34567,
  email: "yukthamukhi",
};
let jp = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
};
console.log(greetGuitarist(jp));
let admin;
admin = {
  permission: ["login"],
  userName: "Max",
};
let admin1;
admin1 = {
  permission1: ["login"],
  userName1: "Max",
};
//Enum
/* Unlike most typescript feature,Enums are not a type-level addition to
js,but smtg added to the lang and runtime. */
var Grade;
(function (Grade) {
  Grade[(Grade["U"] = 1)] = "U";
  Grade[(Grade["D"] = 2)] = "D";
  Grade[(Grade["C"] = 3)] = "C";
  Grade[(Grade["A"] = 4)] = "A";
  Grade[(Grade["B"] = 5)] = "B";
})(Grade || (Grade = {}));
console.log(Grade.U);
