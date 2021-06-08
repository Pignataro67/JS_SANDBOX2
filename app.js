const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/uers')
  .then(data => console.log(data))
  .catch(err => console.log(err));
