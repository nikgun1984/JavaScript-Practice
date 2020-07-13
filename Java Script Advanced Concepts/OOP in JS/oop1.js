// Factory functions

function createElf(name,weapon){
    return {
        name: name,
        weapon: weapon,
        attack(){
            return 'attack with '+this.weapon
        }
    }
}

const peter = createElf('Peter', 'stones');
const sam = createElf('Sam','fire');
peter.attack();
SyncManager.attack();

//Problem here: the function attack() will be used again and again 
//We can correct this by using prototypal inheritence which help us
// to re-use the code not create attack() function everytime.
function createElf(name,weapon){
    return {
        name,
        weapon,
    }
}

const elfFunctions = {
    attack() {
        return 'attack with '+this.weapon
    }
}

const peter = createElf('Pter', 'stones');
peter.attack = elfFunctions.attack;

/*Object.create -- we do not have to manually attach functions 
anymore. It will inherit all functions (obj.__proto__ will give us all functions.)
if we use .notation we can actually access all our methods
*/

const elfFunctions = {
    attack() {
        return 'attack with '+this.weapon
    }
}

function createElf(name,weapon){
    let newElf = Object.create(elfFunctions);
    newElf.name = name,
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());
const sam = createElf('Sam', 'bow');
console.log(sam.attack());

// Object.create will create link between objects newElf.__proto__ will
// give us {attack: [Function]} object