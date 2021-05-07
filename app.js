class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary.addNumbers(1, 2));