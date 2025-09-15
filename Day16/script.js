// find , findIndex , some , every , forEach , sort , reverse , flat , join

// let arr=[10,20,30,40,50];

// find,findIndex

// let result=arr.find((item)=>{
//     return item > 30;
// })
// console.log(result);

// let result=arr.findIndex((item)=>{
//     return item > 30;
// })

// console.log(result);
// let result=arr.findIndex((item)=>item > 30); //if there is only single statement then write like this
// console.log(result);

// some , every

// let arr=[10,20,30,40,50];

// let result=arr.some((item)=>item%2!==0);
// console.log(result);

// let result=arr.every((item)=>item%2===0);
// console.log(result);

// flat

// let arr=[10,20,30,40,50,["rudraksh","chittora",true,false,[10,20,30,[true,false]]],["First","Second"]];
// let newArr=arr.flat(3);
// console.log(newArr);

// join , reverse

// let arr=[10,20,30];
// let result=arr.join("/");
// console.log(result);
// console.log(typeof result);

// let date="08-09-2025"; // 08/09/2025
// let newStr=date.split("-");
// // console.log(newStr);
// let newDateFormat=newStr.join("/");
// console.log(newDateFormat);

// let arr=[10,20,30,40,50];
// let result=arr.reverse();
// console.log(result);

// sort
// let arr=[101,10,23,432,53,42,2,42,87,56,9,98,5];
// // let arr=["rudraksh","aac","abc","cfd","erf","uyt","aaa","asd","bcf","xwv","dse"];
// // let sortedArr=arr.sort();
// // let sortedArr=arr.sort((a,b)=>b-a);
// let sortedArr=arr.sort((a,b)=>a-b);
// console.log(sortedArr);

//forEach
// let arr=[10,20,30,40,50];

// let result=arr.forEach((item)=>{
//     // console.log(item);
//     return item**2;
// })
// console.log(result);

// string methods
// charAt , indexOf , lastIndexOf , includes , trim , split , slice , toUppercase , toLowerCase , replace , concat

// let str="Rudraksh Chittora";
// console.log(str[2]);
// let result=str.charAt(5);
// console.log(result);

// console.log(str.indexOf("k"));
// console.log(str.lastIndexOf("r"));

// console.log(str.includes("sh"));

// trim , split , slice 

// let str="  rudraksh chittora  ";
// console.log(str.length);
// let result=str.trim();
// console.log(result);
// console.log(result.length);

//split
// let str="Rudraksh Chittora";
// let result=str.split(" ");
// console.log(result);

//slice
// let str="rudraksh chittora";
// let result=str.slice(3,6);
// console.log(result);

// concat, replace

//concat
// let str1="rudraksh";
// let str2="chittora";
// console.log(str1.concat(" ",str2));

//replace
// let str="rudraksh chittora";
// let result=str.replace("a","hello");
// let result=str.replaceAll("a","hello");
// console.log(result);

// object methods
// keys , values , entries , freeze , seal, hasOwn , assign

// let obj={
//     firstName : "rudraksh",
//     lastName : "chittora"
// }
// let result=Object.keys(obj);
// let values=Object.values(obj);
// let entries=Object.entries(obj);

// console.log(result);
// console.log(values);
// console.log(entries);

// Object.freeze(obj);
// obj.firstName="RC";
// delete obj.firstName;
// console.log(obj);

// Object.seal(obj);
// obj.gender="Male";
// obj.firstName="RC";
// console.log(obj);

// let obj={
//     firstName : "rudraksh",
//     lastName : "chittora"
// }

// hasOwn - checks whether the property is present in object or not.
// console.log(Object.hasOwn(obj,"firstName"));
// console.log(Object.hasOwn(obj,"gender"));

// assign
// let obj1={
//     firstName : "rudraksh",
//     lastName : "chittora"
// }
// let obj2={
//     // firstName : "RC",
//     gender : "Male",
//     address : "Udaipur"
// }
// console.log(Object.assign(obj1,obj2));

// let arr=[10,20,30];
// let arr1=arr;
// console.log(arr===arr1);
// // let arr1=arr;
// arr1.push(1000);
// console.log(arr);
// console.log(arr1);

// let obj={
//     firstName : "rudraksh",
//     lastName : "chittora"
// }
// let obj1={
//     firstName : "rudraksh",
//     lastName : "chittora"
// }
// let obj1=obj;
// obj1.gender="Male";
// console.log(obj);
// console.log(obj1);
// console.log(obj===obj1);

// spread operators(...)
// let data=[{},{},{},{},{}];
// let copiedData=data;
// copiedData.push({});

// let arr=[10,20,30];
// let arr1=[...arr];
// arr1.push(1000);
// console.log(arr);
// console.log(arr1);

// let arr=[10,20,30];
// let arr2=[100,200,300];
// let arr1=[...arr,"rudraksh",...arr2];
// console.log(arr1);

// let obj={
//     firstName : "Rudraksh",
//     lastName : "Chittora"
// }
// let obj1={
//     gender : "Male",
//     address : "Udaipur"
// }
// let name="techno";
// let obj2={...obj,...obj1,firstName : "RC",name};
// // obj2.gender="Male";
// console.log(obj);
// console.log(obj2);

//DESTRUCTURING AND REST

// let obj={
//     firstName : "rudraksh",
//     lastName : "chittora",
//     gender : "Male",
//     address : "Udaipur",
//     year : "3rd"
// }
// // let {firstName="ADMIN",gender,...rest} = obj;
// let {firstName:fName="ADMIN",gender,...rest} = obj;

// // console.log(firstName);
// console.log(fName);
// console.log(gender);
// console.log(rest);

// let arr=[10,20,30,40];
// let [,a,...rest] = arr;
// console.log(a);
// console.log(rest);