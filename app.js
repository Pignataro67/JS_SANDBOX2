// const pat = {
//   name: 'Pat',
//   age: 30
// }

// console.log(pat);

// console.log(pat.age);

// Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.getAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
  // console.log(this);

  // const pat = new Person('pat');
  // const john = new Person('John');

  // console.log(john.age);

const pat = new Person('Pat', '6/7/1978');
console.log(pat.getAge());