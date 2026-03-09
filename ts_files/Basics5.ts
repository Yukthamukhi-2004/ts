//Index Signatures:we use Index Signatures when we don't know the exact names of the
//properties a class or object will have, but we do know the type of the keys and the type of the values.

interface TransactionObj {
  readonly [index: string]: number; //index signature
  //in key value pair,keys r string which is assigned to index and value can be number.
  Pizza: number;
  Books: number;
  Job: number;
}

/* interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
} */

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

//Dynamic accessing
let prop: string = "Pizza";
console.log(todaysTransactions[prop]); //now ts doesnt like this
//bcoz ,ts is not sure that,does the prop really belongs to todaysTransactions Obj or not?
//so ,index signature is problem solver

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; //same error like above
  }
  return total;
};

console.log(todaysTransactions["job"]);

///////////////////////////////

interface Student {
  //[key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[]; //optional property
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

//console.log(student.test);

for (const key in student) {
  console.log(`${key}:${student[key as keyof Student]}`);
  //we use "keyof" keyword ,when we iterate through obj ,if there is no index signature
  //"keyof" does creates a union type of Student
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentkey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}:${student[key]}`);
};

logStudentkey(student, "name");

/////////////////////////////

/* interface Incomes {
  [key: string]: number;
} */
type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;
/* The Record utility type allows you to map a set of properties to a specific type. Its signature looks like 
this:"Record<K, T>"
K (Keys): The set of property names (usually a union of strings or numbers).
T (Type): The type of value each property should hold.
why do we use?
If you have a fixed set of categories and you want to ensure every category is accounted for
with a specific value type, Record is your best friend.
 */

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
