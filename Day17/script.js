// Math , Number , Date

// Math - sqrt , random , ceil , floor , round , pow , MIN , MAX
// Number - toFixed , parseInt , parseFloat , isNaN , isInteger
// Date - getFullYear , getMonth , getDay , getDate , getHours , getMinutes , getSeconds , getTime , Now() , toDateString , toTimeString

// Math Method

// let result=Math.sqrt(100);
// console.log(result);

// let num=Math.ceil(10.0000001);
// console.log(num);

// let num1=Math.floor(10.99999);
// console.log(num1);

// let num2=Math.round(10.4999);
// // let num2=Math.round(10.5);
// console.log(num2);

// let pow=Math.pow(2,3);
// console.log(pow);

// let min=Math.min(10,5,30);
// console.log(min);
// let max=Math.max(10,20,30);
// console.log(max);

// let randomNumber=Math.random();
// console.log(randomNumber);

// 4 digit otp
// let otp=Math.floor(1000+Math.random()*9000); // 1000-9999
// console.log(otp);

//Number Methods

// let num=102.43535343;
// let newNum=num.toFixed(2);
// console.log(newNum);

// let str="5";
// let newNum=Number(str);
// console.log(newNum);
// console.log(typeof newNum);

// let str="43ab56px";
// console.log(Number(str));
// console.log(typeof Number(str));
// console.log(Number.parseInt(str));
// console.log(typeof Number.parseInt(str));

// let str="34.4te332px";
// console.log(Number.parseFloat(str));

// let str="abc";
// let num=Number(str);
// console.log(Number.isNaN(num));
// console.log(Number.isInteger(num));

// let str="rud184ra23ksh32chi32ttor323a";
// let newArr=str.split("");
// console.log(newArr);

// let sum=0;

// newArr.forEach((item)=>{
//     let newNum=Number(item);
//     if(!Number.isNaN(newNum)){
//         sum+=newNum;
//     }
                   
// });
// console.log(sum);


// Date Methods

// let date=new Date();
// console.log(date);
// console.log(typeof date);

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// let newDate=Date.now();
// let currentDate=new Date(newDate);
// console.log(currentDate);

// let date= new Date(0);
// let date= new Date(60*60*24*1000);
// console.log(date);

// Type conversion(Explicit conversion) and type coercion(implicit conversion)

// let firstVar="40";
// let newNum=Number(firstVar);
// console.log(newNum);

// let firstVar=40;
// let firstVar="";
// console.log(String(firstVar));
// console.log(typeof String(firstVar));
// console.log(Boolean(firstVar));

// let firstVar=[1,2,3];
// console.log(String(firstVar));


// Type coercion

// console.log(5 + "5");
// console.log(typeof (5 + "5"));
// + - convets automatically into string

// console.log(5-"5");   // type number
// console.log("5"-"5"); // type number
// console.log("5"*"5"); // type number
// console.log("5"/"5"); // type number
// console.log("5"+5-10);  // 55-10=45 - output
// console.log("5"-true);  // ouput : 4 as true=1
// console.log([]+[]);
// console.log([]+[12]);
// console.log([]+{});
// console.log({}+[]);


// scopes and hoisiting

// global scope , functional scope/local scope , block scope - ES6

// var - global scope variable / local scope variable in case of functions
// let , const - block scope variable

// {
//     let firstVar="rudraksh";
//     console.log(firstVar);
//     {
//         console.log(firstVar);
//     }
// }
// console.log(firstVar);

// function sum(){
//     var a=100;
//     console.log(a);
// }
// sum();
// console.log(a);

// hoisiting

// console.log(a);
// var a="rudraksh";  //var supports hoisiting

// console.log(a);
// let a="rudraksh"; // same in const also

// sum();

// function sum(){
//     console.log("Sum function called");
// }
// sum();   functions supports hoisiting

// sum();

// let sum=function(){
//     console.log("Sum function called");  //same in const
// }

// sum();