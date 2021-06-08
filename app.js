const http = new EasyHTTP;

// Get Users
const users = http.get
http.get('hhtps://jsonplaceholder.typicode.com/uers');

console.log(users);