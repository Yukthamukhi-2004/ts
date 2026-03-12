//Generics
const echo = <T>(arg: T): T => arg;

//generics in utility function
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

/* great sign/indication to use generic is whn function has to do some logic  */
//example
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
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

//Interface in Generics
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//ex2
//Narrowing Generics
interface HasID {
  id: number;
}
//This defines a strict rule. Any object claiming to be a HasID must have a property named id that is a number.

const processUser = <T extends HasID>(user: T): T => {
  //"This function accepts a type T, but T must at least have the properties defined in 'HasID'."
  //process the user with logic here
  return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
console.log(processUser({ name: "Dave" }));
/* use this pattern whenever you are building reusable utility functions that need to interact with 
specific properties of an object but don't care about the rest of the object's structure. */

//ex with extends

const getUsersProperty = <T extends HasID, K extends keyof T>(
  // building K ,as key of T
  users: T[],
  key: K,
): T[K][] => {
  return users.map((user) => user[key]);
};

const userArray = [
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

class StaticObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T): void {
    this.data = value;
  }
}

const store = new StaticObject("John");
console.log(store.state);
store.state = "Dave";
store.state = 12; //error bcoz,after assigning John,ts infered as string,accepts only string

const myState = new StaticObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);

//Problem solving
/* Write a function called wrapInArray<T> that takes a single value of any type and returns it inside an array.
Goal: wrapInArray(5) should return [5]. */

const wrapInArray = <T>(arg: T): T[] => {
  return [arg];
};

console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));

/* Problem 2: The Last Element
Write a function getLastItem<T> that takes an array of type T and returns the last element. */

const getLastItem = <T>(val: T[]): T | undefined => {
  if (!Array.isArray(val)) {
    return undefined;
  }
  return val.at(-1);
};
console.log(getLastItem(["yuktha", "mukhi", "kodumuru"]));

/* The Task 3:
Create an interface HasLength and a function getLength that uses it. */
interface HasLength {
  length: number;
}

const getLength = <T extends HasLength>(arg: T): number => {
  return arg.length;
};

console.log(getLength("Yuktha"));
console.log(getLength([1, 2, 4]));

/* Problem 2: The Generic "Data Repository" Class
Create a class DataRepository<T extends { id: number | string }>.
Properties: A private array data: T[].
Methods: 1. add(item: T): Adds an item to the array.
2. getById(id: number | string): T | undefined: Finds an item by its ID.
Why: This ensures that no matter what kind of data you store (User, Product, Order), it must have an id property..provide solution for above code */

class DataRepository<T extends { id: number | string }> {
  private data: T[] = [];

  //havent used constructor- bcoz, don't have to use a constructor if you don't need to pass external data into the object at the moment it is created.

  add(item: T): void {
    this.data.push(item);
    console.log(`Added item with ID:${item.id}`);
  }

  getById(id: number | string): T | undefined {
    return this.data.find((item) => item.id === id);
  }

  getAll(): T[] {
    return [...this.data];
  }
}
interface User {
  id: number;
  name: string;
}

const userRepo = new DataRepository<User>();
userRepo.add({ id: 1, name: "Yuktha" });
userRepo.add({ id: 2, name: "Gemini" });

const foundUser = userRepo.getById(1);
console.log(foundUser?.name);
