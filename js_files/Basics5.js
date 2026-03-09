//Index Signatures:we use Index Signatures when we don't know the exact names of the
//properties a class or object will have, but we do know the type of the keys and the type of the values.
/* interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
} */
var todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
//Dynamic accessing
var prop = "Pizza";
console.log(todaysTransactions[prop]); //now ts doesnt like this
//bcoz ,ts is not sure that,does the prop really belongs to todaysTransactions Obj or not?
//so ,index signature is problem solver
var todaysNet = function (transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction]; //same error like above
    }
    return total;
};
console.log(todaysTransactions["job"]);
var student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
//console.log(student.test);
for (var key in student) {
    console.log("".concat(key, ":").concat(student[key]));
    //we use "keyof" keyword ,when we iterate through obj ,if there is no index signature
    //"keyof" does creates a union type of Student
}
Object.keys(student).map(function (key) {
    console.log(student[key]);
});
var logStudentkey = function (student, key) {
    console.log("Student ".concat(key, ":").concat(student[key]));
};
logStudentkey(student, "name");
/* The Record utility type allows you to map a set of properties to a specific type. Its signature looks like
this:"Record<K, T>"
K (Keys): The set of property names (usually a union of strings or numbers).
T (Type): The type of value each property should hold.
why do we use?
If you have a fixed set of categories and you want to ensure every category is accounted for
with a specific value type, Record is your best friend.
 */
var monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (var revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
