const personProtypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personProtypes);
mary.firstName = 'Mary';
mary.lastName = 'William';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const pat = Object.create(personProtypes, {
  firstName: {value: 'Pat'},
  lastName: {value: 'Debaadeo'},
  age: {value: 42}
});

console.log(pat);

console.log(pat.greeting());