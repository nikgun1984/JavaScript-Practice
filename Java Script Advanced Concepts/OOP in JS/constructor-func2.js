//Constructor Functions
function Elf(name, weapon) {
    console.log('this'+this); // will return this Elf{}
    this.name = name;
    this.weapon = weapon;
    //var a = 5; won't be added to our object
    /*To add property u need to use this keyword*/
    console.log('this'+this); //will return this Elf{name:'Peter',weapon:'stones'}
  }
  
  Elf.prototype.attack = function() { 
    return 'atack with ' + this.weapon
  }

  Elf.prototype.buld = function() { 
      function building(){
          return this.name + ' builds a house';
      }
    return building.bind(this); // needs a binding so we can bind our this to object not window
  }                             // otherwise it will return undefined because window object doesnt have name attru=ibute
  
  // Or this way as well
  Elf.prototype.buld = function() { 
    const self = this;
    function building(){
        return self.name + ' builds a house';
    }
  return building();
}

  const sam = new Elf('Sam', 'bow');
  console.log(peter.__proto__); //will point to prototype Elf {attack: [Function]}
  const peter = new Elf('Peter', 'stones');
  sam.attack()