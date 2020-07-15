const num = new Number(3);
console.log(num);

const num1 = new Function(3);
console.log(num1);

//ES5 
function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`)
    }
}
//Add more functionalities to the existing object
User.prototype.exit = function(name){
    console.log(`User ${this.name} exited`)
}

const ivan = new User('Ivan', 37);
const alex = new User('Alex', 20);
console.log(ivan);
ivan.hello();
ivan.exit();
console.log(alex);