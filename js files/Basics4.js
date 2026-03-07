"use strict";
/* .classes
.visibility modifiers
.Private & protected examples
.Extends for Subclasses
.implements for interface
.static class members
.Getters & Setters */
Object.defineProperty(exports, "__esModule", { value: true });
//Classes
//visibility Modifiers
class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, //visibility modifiers //readonly-fixed value,couldnt be mutable
    music, age, //private-confined to this class only
    lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        /* this.name = name; //they are redundant when using shorthand modifiers
        this.music = music;
        this.age = age;
        this.lang = lang; */
    }
    getAge() {
        //it works ,bcoz age is within class
        return `Hello,I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
console.log(Dave.age); //both works,but accepted by js,but not by ts
console.log(Dave.lang);
class webDev extends Coder {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        //subclass and within sub class ,i.e lang is accessible
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
console.log(Sara.age);
console.log(Sara.lang); //subclass ,but not within class
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
///////////////////////////////////////////
class Peeps {
    name;
    static count = 0; //static member
    //bcoz of static keyword,the property doent apply to instance of class,its applies to the class-directly
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        //
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
///////////////////////
//Getters & Setters
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of Strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Tops"];
console.log(MyBands.data);
/* 1. Basic Classes & Visibility
Goal: Practice private, public, and readonly.

Create a class Vehicle with three properties: make (string), model (string), and year (number).

Make make readonly.

Make year private.

Add a method getAge() that subtracts the year from the current year (2026). */
class Vehicle {
    make;
    year;
    model;
    constructor(make, year, model) {
        this.make = make;
        this.year = year;
        this.model = model;
    }
    getAge() {
        return 2026 - this.year;
    }
}
const myCar = new Vehicle("Toyota", 2015, "Camry");
console.log(myCar.getAge());
//# sourceMappingURL=Basics4.js.map