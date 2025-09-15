// DOM Manipulation
// Document object model
// console.log(window);  // global object
// console.log(this);
// console.log(window.document); // same as console.log(document)

// let myDiv=document.getElementById("container");
// console.log(myDiv);
// console.log(myDiv.id);
// myDiv.id="Box";
// console.log(myDiv.id);
// console.log(myDiv.className);
// myDiv.className="header";
// console.log(myDiv.className);

// console.log(myDiv.style);

// myDiv.style.backgroundColor="red";
// myDiv.style.border="3px solid black";
// myDiv.style.borderRadius="50%";

// console.log(myDiv.classList);
// myDiv.classList.add("header");
// myDiv.classList.remove("box");
// myDiv.classList.toggle("box");
// myDiv.classList.toggle("box");

// let myLink=document.getElementById("link");
// console.log(myLink);
// console.log(myLink.href);
// myLink.href="https://facebook.com";

// let input=document.getElementById("password");
// console.log(input);
// input.type="text";

// getAttribute , setAttribute

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));

// myDiv.setAttribute("class","header");
// myDiv.setAttribute("style","background-color:red;border-radius:50px");
// myDiv.setAttribute("style","border : 3px solid green");


// innerHTML , innerText , textContent

// console.log(myDiv.innerHTML);
// myDiv.innerHTML="<input type='password' placeholder='Enter Password' style='padding:20px'/>"

// let newPara=document.getElementById("para");
// console.log(newPara.innerText);
// console.log(newPara.innerHTML);
// console.log(newPara.textContent);

// newPara.innerHTML="<ul><li>First Element</li></ul>"
// newPara.innerText="<ul><li>First Element</li></ul>"

// let myDiv=document.getElementsByClassName("container");
// console.log(myDiv);

// let newDivs=Array.from(myDiv);
// console.log(newDivs);

// for(let i=0;i<myDiv.length;i++){
//     if(i%2===0){
//         myDiv[i].style.background="red";
//     }
//     else{
//         myDiv[i].style.background="yellow";
//     }
//     myDiv[i].style.padding="10px";
// }

// myDiv.map((item)=>{
//     item.style.background="red";
// })

// let arr=[10,20,30];
// console.log(arr);

// newDivs.map((item)=>{
//     item.style.background="red";
// })

// let newDivs=document.getElementsByTagName("div");
// console.log(newDivs);

// querySelector
// querySelectorAll

// let myDiv=document.querySelector("#item");
// let myDiv1=document.querySelector(".container");
// let myDiv2=document.querySelector("div");

// console.log(myDiv);
// myDiv1.style.background="red";
// myDiv2.style.background="red";
// console.log(myDiv1);

// let myDiv=document.querySelectorAll("#item");
// let myDiv1=document.querySelectorAll(".container");
// let myDiv2=document.querySelectorAll("div");
// console.log(myDiv);
// console.log(myDiv1);
// console.log(myDiv2);

// let newEle=document.createElement("h1");
// newEle.innerHTML="My Name is Rudraksh Chittora";
// newEle.style.background="skyblue";
// document.body.appendChild(newEle);
// console.log(newEle);

// document.body.insertBefore()

