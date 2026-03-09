"use strict";
//Asserstion
Object.defineProperty(exports, "__esModule", { value: true });
//convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
const addOrConcate = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcate(2, 2, "concate");
//Double casting
10;
/* ts will check with assertions ,that is y ,the above is error  */
10;
//DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
img.src;
myImg.src;
/* const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear; */
//1st variation
/* const year: HTMLElement | null = document.getElementById("year");
let thisYear: string = new Date().getFullYear().toString();
if (year) { //using type guard
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
} */
//2nd variation
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
//# sourceMappingURL=Basics3.js.map