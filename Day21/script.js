// constructors and classes

// This keyword

// console.log(this);

// let obj={
//     firstName : "Rudraksh",
//     lastName : "Chittora",
//     // greet : function(){
//     //     // console.log(this);
//     //     // console.log(this.firstName);
//     //     console.log(`Hello ,${this.firstName} Good Morning`);
//     // }
//     greet : ()=>{
//         // console.log(this);
//         // console.log(this.firstName);
//         console.log(`Hello ,${this.firstName} Good Morning`);
//     }
// }
// obj.greet();

// function sum(){
//     console.log(this);
// }
// sum();

// const sum=()=>{
//     console.log(this);
// }
// sum();


// Constructors

// function person(firstName,lastName){
//     let obj={};
//     obj.firstName=firstName;
//     obj.lastName=lastName;
//     obj.greet=function(){
//         console.log(`Hello ${this.firstName},Good Morning`);
//     }
//     return obj;
// }

// const p1=person("rudraksh","chittora");
// console.log(p1);
// p1.greet();

// function Person(firstName,lastName){
//     // console.log(this);
//     this.firstName=firstName;
//     this.lastName=lastName;

//     // this.greet=function(){
//     //     console.log(`Hello ${this.firstName}`);
//     // }
// }

// Person.prototype.greet=function(){
//     console.log(`Hello ${this.firstName}`);
// }

// const p1=new Person("rudraksh","chittora");
// const p2=new Person("rudraksh","chittora");
// console.log(p1);
// console.log(p2);
// p1.greet();
// p2.greet();
// // console.log(p1.__proto__);
// // console.log(p1.__proto__ == Person.prototype);  // output : true

// p1.__proto__.gender="Male";
// console.log(p2.gender);

// Array.prototype.sum=function(){
//     console.log("Sum Function called");
// }
// Array.prototype.type="Object";

// let arr=[10,20,30];
// arr.sum();

// let arr2=[100,200,300];
// arr2.sum();


// Classes

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     greet(){
//         console.log(`Hello , ${this.firstName} , Good Morning`);
//     }
// }
// const p1= new Person("Rudraksh","Chittora");
// console.log(p1);
// p1.greet();

// Inheritance

// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} is speaking`);
//     }
// }
// class Dog extends Animal{
//     constructor(name,voice){
//         super(name);
//         this.voice=voice;
//     }

//     speak(){
//         super.speak();
//         console.log("Speak called from Dog");
//     }
// }
// const d1=new Dog ("Tom","Bark");
// console.log(d1);
// d1.speak();


// Private property

// class Account{
//     #balance;
//     constructor(name,initialBalance){
//         this.name=name;
//         this.#balance=initialBalance;
//     }
//     // showBalance(){
//     //     console.log("Balance : ",this.#balance);
//     // }
//     // updateBalance(balance){
//     //     this.#balance+=balance;
//     // }

//     get balance(){
//         console.log(this.#balance);
//     }
//     set balance(amount){
//         this.#balance+=amount;
//     }
// }
// const a1=new Account("rudraksh",1000);
// // console.log(a1);
// // console.log(a1.#balance);
// // a1.showBalance();
// // a1.updateBalance(1000);
// // a1.showBalance();

// // getters and setters

// a1.balance=1000; // set function call
// a1.balance;      // get function call

class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    static greet(){
        console.log("Hello , Good Morning");
    }
}
const p1=new Person("rudraksh","chittora");
// console.log(p1);
// p1.greet();
Person.greet();