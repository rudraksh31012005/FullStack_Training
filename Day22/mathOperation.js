// function sum(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// module.exports=sum;
// module.exports={sum,sub};

//default export -only one element
// name export - can be multiple

export default function sum(a,b){
    console.log(a+b);
}

export function sub(a,b){
    console.log(a-b);
}