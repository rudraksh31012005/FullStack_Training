// function sum(){
//     console.log("Sum Function Called");
// }

// import and export

// cjs-common js , mjs - modulejs

//using cjs
// const {sum,sub}=require("./mathOperation.js");
// // console.log(sum);
// sum(100,200);
// sub(100,200);

//using mjs
import sum,{sub} from "./mathOperation.js";
sum(100,200);
sub(100,200);