//Asserstion

type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific

let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

const addOrConcate = (
  a: number,
  b: number,
  c: "add" | "concate",
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcate(2, 2, "concate") as string;

//Double casting
10 as string;
/* ts will check with assertions ,that is y ,the above is error  */
10 as unknown as string;

//DOM

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;

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
const year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
