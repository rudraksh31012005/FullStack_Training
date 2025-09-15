// let x=10;
// let y=8;
// console.log("The addition of x and y is : ",x+y);
// console.log("The subtraction of x and y is : ",x-y);
// console.log("The multiplication of x and y is : ",x*y);
// console.log("The division of x and y is : ",x/y);
// console.log("The remainder of x and y is : ",x%y);
// console.log("The x**y is : ",x**y);

// let a="rudraksh";
// x+=y  //x=x+y;
// console.log(x);

// x-=y; //x=x-y;
// console.log(x);

// x*=y; //x=x*y;
// console.log(x);

// x/=y; //x=x/y;
// console.log(x);

// x%=y; //x=x%y;
// console.log(x);

// x**=y; //x=x**y;
// console.log(x);

// let x=10;
// let y="10";

// console.log(x==y);
// console.log(x===y);
// console.log(x!=y);
// console.log(x!==y);

// console.log(x>y);
// console.log(x>=y);

// let x=true;
// let y=false;
// console.log(x&&y);
// console.log(x||y);
// console.log(!x&&y);

// console.log(10 && 20);  //output:20
// console.log(0 && 20);  //output:0
// console.log(10 && []);  //output:[]
// console.log(0 || 20);  //output:20
// console.log(10 || []);  //output:10
// console.log(10 || ![]);  //output:10
// console.log("" || []);  //output:[]

//Exercise

// let num1 = 10;
// let num2 = 0;
// let num3 = 20;

// console.log(num1 && num3); 
// console.log(num2 || num3);  
// console.log(num1 || num2); 
// console.log(num2 && num3);

// let str1 = "Hello";
// let str2 = "";
// let num1 = 42;

// console.log(str1 && num1); 
// console.log(str2 || num1); 
// console.log(str1 || str2); 
// console.log(num1 && str2);

// let isTrue = true;
// let isFalse = false;
// let num = 10;

// console.log(isTrue && num);
// console.log(isFalse || num); 
// console.log(isTrue && isFalse);   
// console.log(isFalse || isTrue);

// let num1 = 0;
// let num2 = 100;
// let str1 = "JS";
// let str2 = "";

// console.log((num1 || num2) && str1); 
// console.log((str2 || num1) || str1); 
// console.log((str1 && num2) || num1);
// console.log((num1 && str2) || str1);

// let bool1 = true;
// let bool2 = false;
// let num = 0;
// let str = "Code";

// console.log(bool1 && str && num);  
// console.log(bool1 || str || num);    
// console.log(bool2 || num || str);    
// console.log(bool2 && str && num);

// let a = 5;
// let b = 0;
// let c = "Hi";
// let d = "";

// console.log(a && b && c); 
// console.log(a || b || d); 
// console.log(b || d || c); 
// console.log(c && a && d);

// let x = 10;
// let y = 0;
// let z = -5;

// console.log(x && y && z); 
// console.log(x || y || z); 
// console.log(y || z || x); 
// console.log(z && x && y);

// let role="ADMIN";
// role==="ADMIN" && console.log("Your role is admin , so you can access this info ");

// let arr=[10,20,30,40,50];
// let arr=[];
// arr.length > 0 && console.log(arr[0],arr[1]);

// let x=5; //output: 0101
// let y=10; //output: 1010
// console.log(x & y); //output:0000
// console.log(x | y); //output:1111
// console.log(x ^ y); //output:1111
// console.log(x<<3);
// console.log(y>>2);

//Conditional Statemnents

// let number=60;
// if(number > 90){
//     console.log("Grade A+");
// }
// else if(number > 80){
//     console.log("Grade A");
// }
// else if(number>70){
//     console.log("Grade B");
// }
// else if(number > 60){
//     console.log("Grade C");
// }
// else if(number >50){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }

//switch cases

// let day=5;
// let day=+prompt("Enter any day number: ");

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

//functions

// function func1(a,b){
//     console.log(`The value of a is ${a},The value of b is ${b}`);
// }
// func1(50,60);

// const func1=function(a,b){
//     console.log(a,b);
// }
// func1(100,200);

// const func1 = (a,b)=>{
//     console.log("The value of a is ",a);
//     console.log("The value of b is ",b);
// }
// func1(100,200);

//loops

// for loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }

//print square pattern

// function printSquare(r,c) {
//   for (let i = 0; i < r; i++) {
//     let row = '';
//     for (let j = 0; j < c; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   }
// }

// printSquare(4,4);