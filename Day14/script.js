// array methods

// push , pop , shift , unshift , map , filter , reduce , slice , splice , indexOf , lastIndexOf , concat , includes , find , findIndex , some , every , forEach , sort , reverse , flat , join

// let arr=[10,20,30,40,50,60];

// console.log(arr.push("rudraksh")); //returns the new length of the array and mutate the original array
// console.log(arr);

// console.log(arr.pop()); // returns the popped element and mutate the original array
// console.log(arr);

// console.log(arr.shift()); // removes the first element
// console.log(arr);

// console.log(arr.unshift("rudraksh")); // insertion at the first element
// console.log(arr);

// function func1(){
//     console.log("Func1 is called");
// }

// function func2(callback){
//     callback();
//     console.log("callback is executed and now running the func2");
// }

// func2(func1);  // func1 - callback function , func2 - higher order function


// function func2(a){
//     console.log(a);
//     a(100);
//     console.log("This is func2");
// }

// function callback1(p1){
//     console.log(p1);
//     console.log("This is func 1 and passing as a callback");
// }

// function callback2(p2){
//     console.log(p2)
//     console.log("Func 3 is called and passing as a callback");
// }

// func2(callback1); 

// func2(callback2);


// calculator

// function add(x,y){
//     console.log(x+y);
// }
// function sub(x,y){
//     console.log(x-y);
// }
// function multi(x,y){
//     console.log(x*y);
// }
// function division(x,y){
//     console.log(x/y);
// }

// const add=(x,y)=>{
//     console.log(x+y);
// }
// const sub=(x,y)=>{
//     console.log(x-y);
// }
// const multi=(x,y)=>{
//     console.log(x*y);
// }
// const division=(x,y)=>{
//     console.log(x/y);
// }

// function calculator(a,b,operation){
//     console.log(operation);
//     operation(a,b);
// }
// calculator(100,200,division);
// calculator(100,200,(x,y)=>{
//     console.log(x+y);
// });

// calculator(100,200,(x,y)=>{
//     console.log(x-y);
// });

// calculator(100,200,(x,y)=>{
//     console.log(x*y);
// });

// calculator(100,200,(x,y)=>{
//     console.log(x/y);
// });

//map

// let arr=[10,20,30,40,50,60];

// let result=arr.map((item)=>{
//     // console.log(item);
//     // console.log(item**2);
//     return item**2;
// });
// console.log(result);

// let products=[
//     {
//         productName : "Iphone",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is 16 series of iphone"
//     },
//     {
//         productName : "Samsung",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is S25 series of Samsung"
//     },
//     {
//         productName : "Google pixel 9",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is pixel series of Google"
//     },
//     {
//         productName : "Nothing",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is nothing phone"
//     },
// ]

// let result=products.map((product,index)=>{
//     //  product.id=index+1;
//     let newObj={...product , id : index+1}; //copies all key pairs of product in newObj and add index propery also in it.
//     return newObj;
// });

// // map doesn't change original array and returns the new array with the same length of the original array

// console.log(result);
// console.log("---------****---------");
// console.log(products);

// let arr=[10,20,30,40,50,60];

// let result=arr.map((item)=>{
//     // return item >30;
//     if(item > 30){
//         return item;
//     }
// });
// console.log(result);

//filter

// let arr=[10,20,30,40,50,60];

// let result=arr.filter((item)=>{
//     return item >30;
// });

// console.log(result);
// console.log(arr);

//reduce - returns the single value

// let arr=[10,20,30,40,50,60];

// let result=arr.reduce((acc,curr)=>{
//     return acc+curr; // acc curr result
//                      // 10   20   30
//                      // 30   30   60
//                      // 60   40   100
//                      // 100  50   150
//                      // 150  60   210
//                      // 210  
//                      //returns the accumulator value
// },1000);            // accumulator initial value = 1000
// console.log(result);

//slice,splice

// let arr=[10,20,30,"rudraksh",40,"rudraksh",50,"rudraksh",60];

// let result=arr.slice(2,4);
// console.log(result);

// arr.splice(3,2,"hello");
// arr.splice(3,0,"hello");
// console.log(arr);

// let result=arr.indexOf("rudraksh");
// console.log(result);

// let result=arr.indexOf("rudraksh",4);
// console.log(result);

// let result=arr.lastIndexOf("rudraksh");
// console.log(result);


// concat , includes

// let arr1=[10,20,30];
// let arr2=[40,50,60];
// let result=arr1.concat(arr2);
// let result=arr1.concat("rudraksh",arr2);
// console.log(result);

// let arr=[10,20,30,"rudraksh",40,"rudraksh",50,"rudraksh",60];
// let result=arr.includes(40);
// console.log(result);