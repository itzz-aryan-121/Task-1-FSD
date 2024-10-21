// const promise = new Promise((res, rej) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) {
//       res("Data Send Successfully");
//     } else {
//       rej("Data Send Failed");
//     }
//   },5000);
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



// function task(mes,delay){
//     return new Promise((resolve)=>{
//         setTimeout(() =>{
//             console.log(mes);
//             resolve();
//         },delay);
//     })
// }

// task("Hello World",1000)
// .then(() => task("Hello World 2",2000))
// .then(() => task("Hello World 3",3000))

// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data  = [
//                 {
//                     name: 'John', score: 90,
            
//                 },
//                 {
//                     name: 'Bob', score: 80,
            
//                 },
//                 {
//                     name: 'Charlie', score: 70,
            
//                 },
//                 {
//                     name: 'David', score: 60,
            
//                 },
//                 {
//                     name: 'Rahul', score: 50,
            
//                 },
                
//             ];
//             const scores = data.map((x) => x.score);
//             const sum  = data.reduce((x, y) => x + y.score, 0);
//             resolve({data,scores,sum});
//         }, 1000);
//     });
// }

// fetchData()
//     .then((result) => {
//         console.log("Scores:" + result.scores);
//         console.log("Sum:" + result.sum);
//     })
//     .catch((error) => {
//         console.error(error);
//     });



// async function OrderFood(name,time) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log(name + " Ordered Food:");
//             resolve();
//         }, time);
//     });
// }

// async function Start() {
//     try {
//         await OrderFood("New", 2000);
//         console.log("Pizza 🍕");
//         await OrderFood("New", 3000);
//         console.log("Burger 🍔");
//         await OrderFood("New", 4000);
//         console.log("Noodles 🍜");

//         await OrderFood("New", 5000);

//         console.log("Pasta 🍝");
//     }
//     catch(error) {
//         console.error(error);
//     }
// }

// Start();


// async function fetchData() {
//     try {
//         const res  = await fetch("https://api.github.com/users?per_page=10")
//     const data  = await res.json();

//     data.forEach(user => {
//         console.log(`Login: ${user.login}, Node ID: ${user.node_id} , URL: ${user.url}`);
//     });
//     } catch (error) {
//         console.log("Error" +error);
//     }
    


// }

// fetchData()




const fetchButton = document.getElementById('fetchuser');
const userContainer = document.getElementById('user-container');


async function fetchData() {
    try {
        const res = await fetch("https://api.github.com/users?per_page=10");
        const data = await res.json();

        
        userContainer.innerHTML = '';

        const heading = document.createElement('h1');
        heading.textContent = 'Top 10 GitHub Users';
        userContainer.appendChild(heading);

        data.forEach(user => {
            const userElement = document.createElement('p');
            const userLink = document.createElement('a');
            userLink.href = user.html_url;
            userLink.textContent = user.login;
            userLink.target = '_blank'; 

            userElement.appendChild(userLink);
            userContainer.appendChild(userElement);
        });

    } catch (error) {
        console.error("Error: " + error);
        userContainer.textContent = 'Failed to load users. Please try again.';
    }
}


fetchButton.addEventListener('click', fetchData);
