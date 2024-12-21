fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "GET", // or POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer your_access_token",
    "X-Custom-Header": "some value",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("Print Text  ");
