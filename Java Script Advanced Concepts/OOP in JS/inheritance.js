class Character {
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){  //private method
        return 'attack with '+this.weapon;
    }
}

class Elf extends Character{
    constructor(name, weapon, type){
        //console.log(this); must call super constructor first
        super(name,weapon);
        console.log(this);
        this.type = type;
        console.log(this);

    }
}

class Ogre extends Character{
    constructor(name,weapon,color){
        super(name,weapon);
        this.color = color;
    }

    makeFort(){
        return 'strongest fort in the world made';
    }
}

class Queen extends Character{
    constructor(name,weapon,type){
      super(name,weapon);
      this.type = type;
    }
  
    attack(){
      return `I am the ${this.name} of ${this.type}, now bow down to me`
    }
  }

const fiona = new Character('Fiona', 'ninja stars');
//This way u can get all attributes from Fiona but ogre is not Elf
// ogre.__proto__ <--------- will return empty {} whereas fiona.__proto__ returns Elf
const ogre = {...fiona};
// There's another way to do this but better way where

const dolby = new Elf('Dolby','cloth','house');
console.log(dolby.attack());

const shrek = new Ogre('Shrek','club','green');
shrek.makeFort();

//Checking all this connections with the means of isPrototypeOf
console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));

//Checking all this connections with the means of instanceof

console.log(dolby instanceof Ogre);
console.log(dolby instanceof Character);

//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
