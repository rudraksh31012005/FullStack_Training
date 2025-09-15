// Async JS

// Promise - Promise is an object which contains future value.

// function fetchData(){
//     setTimeout(()=>{
//         console.log("Hello World");
//     },2000)
//     console.log("After the set time out");
// }
// fetchData();

// function fetchData(){
//     let data={
//         firstName : "rudraksh",
//         lastName : "chittora",
//         gender : "Male"
//     };
//     return data;
// }
// let result;
// setTimeout(()=>{
//     result=fetchData();
// },2000);

// setTimeout(()=>{
//     console.log(result);
// },2100);

// function fetchData(){
//     let data={
//         firstName : "rudraksh",
//         lastName : "chittora",
//         gender : "Male"
//     };
//     return new Promise((resolve,reject)=>{
//         let randomNumber=Math.floor(Math.random()*100);
//         console.log(randomNumber);
//         setTimeout(()=>{
//             if(randomNumber%2===0)
//                resolve(data);
//             else
//                reject("Error in fetching data");
//         },2000);
//     })
// }
// let result=fetchData();
// console.log(result);
// console.log("Data Fetched");

// result

// .then((res)=>{
//     console.log(res);
//     alert("Data Fetched");
// })

// .catch((error)=>{
//     console.log(error);
//     alert("Error");
// })

// const fetchData = () => {
//   return fetch("https://fakestoreapi.com/products");
// };
// // console.log(fetchData());

// fetchData()
//   .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     // res.join()
//     return res.json();

//     // .then((data)=>{
//     //     // console.log(data);
//     // })
//     // .catch((er)=>{
//     //     console.log(er);
//     // })
// })

// .then((data) => {
//     let tbody = document.getElementById("tbody");
//     data.forEach((item) => {
//       let tr = document.createElement("tr");
//       tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`;
//       tbody.appendChild(tr);
//     });
// })

// .catch((error) => {
//     console.log(error);
// })

// .finally(()=>{
//     console.log("Task Completed");
// })

const fetchData=async()=>{
    try{
       const response= await fetch("https://fakestoreapi.com/products");
       console.log(response);
       const data=await response.json();
       console.log(data);
       let tbody=document.getElementById("tbody");

       data.forEach((item) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`;
            tbody.appendChild(tr);
        })
    }catch(error){
       console.log(error);
    }
}

fetchData();

// Event Loop
