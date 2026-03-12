//Generics
var echo = function (arg) { return arg; };
//generics in utility function
var isObj = function (arg) {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
/* great sign/indication to use generic is whn function has to do some logic  */
//example
var isTrue = function (arg) {
    if (Array.isArray(arg) && !arg.length) {
        return { arg: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg: arg, is: false };
    }
    return { arg: arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Davge" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
var checkBoolValue = function (arg) {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
//This defines a strict rule. Any object claiming to be a HasID must have a property named id that is a number.
var processUser = function (user) {
    //"This function accepts a type T, but T must at least have the properties defined in 'HasID'."
    //process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
console.log(processUser({ name: "Dave" }));
/* use this pattern whenever you are building reusable utility functions that need to interact with
specific properties of an object but don't care about the rest of the object's structure. */
//ex with extends
var getUsersProperty = function (
// building K ,as key of T
users, key) {
    return users.map(function (user) { return user[key]; });
};
var userArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            stress: "kulas Light",
            suite: "Apt 556",
        },
        company: {
            name: "Romaguera-Crona",
            website: "hildegard.org",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@mellissa.tv",
        address: {
            street: "Victore Plains",
            suite: "Suite 879",
        },
        phone: "010-692-6593 x09125",
        website: "anatasia.net",
    },
];
console.log(getUsersProperty(userArray, "address"));
//Class with Generics
var StaticObject = /** @class */ (function () {
    function StaticObject(value) {
        this.data = value;
    }
    Object.defineProperty(StaticObject.prototype, "state", {
        get: function () {
            return this.data;
        },
        set: function (value) {
            this.data = value;
        },
        enumerable: false,
        configurable: true
    });
    return StaticObject;
}());
var store = new StaticObject("John");
console.log(store.state);
store.state = "Dave";
store.state = 12; //error bcoz,after assigning John,ts infered as string,accepts only string
var myState = new StaticObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
//Problem solving
/* Write a function called wrapInArray<T> that takes a single value of any type and returns it inside an array.
Goal: wrapInArray(5) should return [5]. */
var wrapInArray = function (arg) {
    return [arg];
};
console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));
