const brad = {
  name: 'Brad',
  age: 30
}

console.log(brad);

console.log(brad.age);

// Person Constructor

function Person() {
    this.name = name;
    this.age = age;
    console.log(this);
}

const brad = new Person('Brad');
const john = new Person('John');

console.log(john.age);