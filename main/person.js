// Write your code here
module.exports = Person
　function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.introduce = function () {
  return 'My name is Tom. I am 21 years old.';
};

var p = new Point(Tom, 21);
	p.introduce();