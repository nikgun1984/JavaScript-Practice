function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
//Lets add function to our ''prototype object'' prototype: {attack}
Elf.prototype.attack = function(){
    return 'attack with '+this.weapon;
} /* dynamically scoped, it doesnt matter where it is written it matters 
     who calls it
  */
Elf.prototype.attack = ()=>{
    return 'attack with '+this.weapon;
} // arrow function are lexically scoped it defines where they are written
//In this case it is a global object

const peter = new Elf('Peter','stones');
const sam = new Elf('Sam','whip');
console.log(peter.name);

/* In the example above this key word won't point to the window object but
point to the object that has just been constructed with new keyword */

