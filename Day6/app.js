// let a = (1,2) => {
//     return a 
// }


// let b = () => {console.log("Hello World hi");}
// b();
// a();


// let a = (x,y) => {
//     return "Hello World " + x + " " + y;
// }

// let b = (a, b) => {
//     return "Hello World hi " + a + " " + b;
// }

// console.log(b("parameter1 for b", "parameter2 for b"));
// console.log(a("parameter1 for a", "parameter2 for a"));


// function display(){
//     // let p1 = document.querySelectorAll("p");
//     // if (p1) {
//     //     p1[0].innerHTML = "I am a paragraph";
//     //     // p1.innerHTML = "I am a paragraph";
//     //     p1[0].style.backgroundColor = "red";
//     // } else {
//     //     console.error("Element with ID 'p1' not found");
//     // }

    
// // }
// const changeheader = () => {

//     const header = document.querySelector("h1");
//     header.textContent = 'New Heading';

//     let a1 = document.querySelector("a");
//     a1.setAttribute('href','https://aktu.ac.in')
// }

// let addcontent = () => {
//     let div = document.createElement("div");
//     div.innerHTML = "Hello World";
//     document.body.appendChild(div);
// }
// const  eventlistener = () => {
//     // let button = document.querySelector("button");
//     // button.addEventListener("click", () => {
//     //     document.getElementById('res')
//     //     .innerHTML = "Updated";
//     // });

    
//     }
// }


// document.getElementById('btn1').onmouseover = () => {
//     document.querySelector('body').style.backgroundColor = "red";

// }

const handleclick = () => {
    document.getElementById('btn1').style.translate = '30rem 0'
} 

let btn = document.getElementById('btn1');
btn.addEventListener('click',handleclick);


   
 