// let arr=[10,20,30,40,50,60,true,false,"rudraksh",[100,200,300,400,"chittora",[0,1,2,3,4,5,false]]];
// console.log(arr[9][5][6]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log(arr[arr.length-1][arr[arr.length-1].length-1]);
// console.log(arr[arr.length-1][arr[arr.length-1].length-1][arr[arr.length-1][arr[arr.length-1].length-1].length-1]);

// let arr=[10,20,30];

// arr[5]=40;
// console.log(arr);

// let obj={
//     firstName : "Rudraksh",
//     lastName : "Chittora",
//     gender : "Male",
//     Age : 20
// }

// console.log(obj.firstName);
// obj.gender="Male";
// console.log(obj);
// console.log(typeof(obj.Age));
// console.log(obj["firstName"]);  //same as obj.firstName

// let keyvar="Age";
// console.log(obj[keyvar]);

// let arr=[10,20,30,40,50,60,70];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]**2);
// }


// Storing the square of every element of one array into the new array.

// function sqArr(arr){
//     let sqArr=[];
//     for(let i=0;i<arr.length;i++){
//         sqArr[i]=arr[i]**2;
//     }
//     return sqArr;
// }
// let squaredArr=sqArr([10,20,30,40,50,60]);
// console.log(squaredArr);

//variations of for loop in Javascript:

//for in , for of

// for in - it directly gives index
// for of - it directly gives element/value ,not index. 

//1. for in
// let arr=[10,20,30,40,50,60];

// for(let index in arr){
//     console.log(index);
// }

//2. for of
// let elements=[10,20,30,40,50,60];
// for(let element of elements){
//     console.log(element**2);
// }

// let fruits=["mango","apple","kiwi"];

// for(let fruit of fruits){
//     console.log(fruit);
// }


//while loop

// let number=0;
// while(number<10){
//     console.log(number);
//     number++;
// }


// dowhile loop

// let number=0;
// do{
//     console.log(number);
//     number++;
// }while(number<10);

const obj={
    firstName : "Rudraksh",
    lastName : "Chittora",
    address : "Udaipur",
    section : "A",
    gender : "Male"
}

// obj.section="B";
// console.log(obj.section);

// let keys=Object.keys(obj);
// console.log(keys);

// for(let i=0;i<keys.length;i++){
//     console.log(obj[keys[i]]);
// }

for(let key in obj){
    console.log(obj[key]);
}