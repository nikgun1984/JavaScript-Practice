let dragon = {
    name: 'Tanya',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            return `I am ${this.name}, the breather of fire`;
        }
    }
}

console.log(dragon.sing());

let lizard = {
    name: 'Kiki',
    fight(){
        return 1;
    }
}

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());

lizard.__proto__ = dragon;
console.log(lizard.sing());
console.log(lizard.toString());


// Prototypal Inheritence

let human = {
    mortal: true
};

let socrates = Object.create(human);
console.log(socrates); //will return empty object
// add some properties
socrates.age = 45;
socrates.philosopher = true;
console.log(socrates);
//socrates also inhereted human attributes as well even
//though they aint a part of the object they are going 
// down by the chain socrates.__proto__ which points to human.prototype
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

console.log(typeof String)