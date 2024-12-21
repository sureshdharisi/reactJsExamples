// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "GET", // or POST, PUT, DELETE, etc.
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer your_access_token",
//     "X-Custom-Header": "some value",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



async function getToDos(){
  const response=await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET", // or POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer your_access_token",
      "X-Custom-Header": "some value",
    },
  });
  console.log("Inside get todos");
  const data= await response.json();
  console.log(data);
  return data;
}

const todos=getToDos();
console.log(todos);
console.log("Print Text  ");