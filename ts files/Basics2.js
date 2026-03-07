"use strict";
/* .TypeAliases
.Interface
.Narrowing with Optional Properties
.Merging Types
.Enum
.Optional parameter
.Default Parametes
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["B"] = 5] = "B";
})(Grade || (Grade = {}));
console.log(Grade.U);
//Optional Parameters
const addAll = (p, q, r) => {
    if (typeof r !== "undefined") {
        return p + q + r;
    }
    return p + q;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
//never type
/* two use cases for never types : 1. errors in functions
                                  2. for infinite loops
 */
//1
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//2
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//3
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
//# sourceMappingURL=Basics2.js.map