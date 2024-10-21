// let num = [1,2,3,4,5,6,7];

// let newnum  = num.map((x) => {
//     return x * 2;
// })

// console.log(newnum);

// let newnum = num.filter((x) => {
//     return x % 2 == 0;
// });

// console.log(newnum);


// let newnum = num.reduce((x, y) => {
//     return x * y;
// });

// console.log(newnum);


// const students  = [
//     {
//         name: 'John', score: 90,

//     },
//     {
//         name: 'Bob', score: 80,

//     },
//     {
//         name: 'Charlie', score: 70,

//     },
//     {
//         name: 'David', score: 60,

//     },
//     {
//         name: 'Rahul', score: 50,

//     },
    
// ];


// let scores = students.filter((x) => x.score > 60).map((x) => x.score+10).reduce((x, y) => x + y,0);
// console.log(scores);

// // console.log(sum);

// let num = [1,2,3,4,5,6,7];

// num.forEach((x) => {    
//     if(x%3==0){
//         console.log(x)
//     }
// });


// CallBack Functions


//  let sayhello = () => {
//     console.log("Hello World");
// }

// console.log("start");

// setTimeout(sayhello, 2000);

// console.log("end");

console.log("start");
setTimeout(() => {
    console.log("Hello World");
    setTimeout(() => {
        console.log("Hello World 2");
        setTimeout(() => {
            console.log("Hello World 3");
        }, 3000);
        setTimeout(() => {
            console.log("Hello World 4");
        }, 2000);
    }, 2000);
},1000);


console.log("end");





