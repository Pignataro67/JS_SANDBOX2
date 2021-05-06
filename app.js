const personProtypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const mary = Object.create(personProtypes);
mary.firstName = 'Mary';
mary.lastName = 'William';
mary.age = 30;

console.log(mary.greeting());