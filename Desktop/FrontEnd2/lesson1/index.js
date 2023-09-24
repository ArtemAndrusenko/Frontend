// const url = "https://jsonplaceholder.typicode.com/posts";
// const data = {
//     title: "Web-site",
//     userId: 455454165,
//     port: 2040,
// };
//
// fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     }
// });



//const url = "https://jsonplaceholder.typicode.com/posts/1";
//
// const data = {
//     id: 1,
//     title: "Alice",
//     body: "address",
//     userId: 1
// }
//
// fetch(url, {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     }
// });



//const url = "https://jsonplaceholder.typicode.com/posts/1";
//
// const data = {
//   title: "Alice",
// };
//
// fetch(url, {
//   method: "PATCH",
//   body: JSON.stringify(data),
//   headers: {
//         "Content-type": "application/json; charset=UTF-8",
//   },
// });



// const url = "https://jsonplaceholder.typicode.com/posts/1";
//
// fetch(url, {
//    method: "DELETE",
// });



// function fetchData() { // асинх. фунция
//     return new Promise((res, rej) => {
//         res();
//     });
// }
// fetchData()


// const url = "https://jsonplaceholder.typicode.com/todos";
// function fetchData() {
//    return fetch(url); 
// }  

// fetchData()
//     .then((response) => response.json())
//     .then((data) => {
//      console.log(data);
// })



// const url = "https://jsonplaceholder.typicode.com/todos";
// const url1 = "https://jsonplaceholder.typicode.com/users"; 
// const url2 = "https://jsonplaceholder.typicode.com/albums"; 

// function fetchData(urlData) {
//     return fetch(urlData);
// }
// Promise.all([fetchData(url), fetchData(url1), fetchData(url2)]).then( //.allSettled, .race
//     (data) => {} 
// );



// async function fetchAsyncData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }  


// async function fetchAsyncData() {   
//     try {     
//         const response = await fetch(url);     
//         const data = await response.json();     
//         return data;   
//     } catch (err) {     
//         console.log(err);   
//     } 
// }  

// fetchAsyncData().then((data) => {   
//     console.log(data); 
// });