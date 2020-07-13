//Constructor Functions
class Elf {
    constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }

  attack(){
    return 'attack with '+this.weapon;
  }
}
  const sam = new Elf('Sam', 'bow');
  const peter = new Elf('Peter', 'bow');
  sam.attack();
  console.log(peter instanceof Elf);

  //THIS KEYWORD

  //1. new binding this

  function Person(name,age){
      this.name = name;
      this.age = age;
  }
  //this keyword will refer to constructor Person
  const person1 = new Person('Xavier', 55);
 
  //2. implicit binding

  const person = {
      name: 'Karen',
      age: 40,
      action(){
          //this keyword will refer to the person object
          console.log(`My name is +${this.name} and i do not wear mask`);
      }
  }

  //3. explicit binding

  const person3 = {
      name: 'Karen',
      age: 40,
      hi: function(){
          console.log('hi' + this.setTimeout)
      }.bind(window)
  }//will explicitly get bound to the window

  //4. arrow function -- lexical scoping
  
  const person4 = {
      name: 'Karen',
      age: 40,
      hi: function () {
          let self = this;
          let inner = function() {   // if we used 'function' it would be in window scope
              console.log(`My name is ${self.name} and i do not wear mask`);
          }
          return inner();
      }
  }

  person4.hi()


