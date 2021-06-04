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