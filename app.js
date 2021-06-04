// const sayHello = function() {
//   console.log('Hello');
// }

const sayHello = () => {
  console.log('Hello');
}

// One line function does not need braces
const sayHello = () => console.log('Hello');

// One line return
const sayHello = () => 'Hello';

// Same as above
const sayHello = function() {
  return 'Hello';
}

// Return object, need ()
const sayHello = () => ({ msg: 'Hello'}); 

// single param does not ()
const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need ()
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello('Pat', 'P');  

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name) {
  return name.length;
});

// Arrow
const nameLengths = users.map((name) => {
  return name.length;
});

// Refractor
const nameLengths = users.map(name => name.length);

console.log(nameLengths);



///// Using Arrow Functions in the previous Fetch exercise

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get local json data
function getJSON() {
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
  .then()
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}