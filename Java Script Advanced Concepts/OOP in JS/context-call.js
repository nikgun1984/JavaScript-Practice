'use strict'; // with 'use strict' this keyword will return undefined

//Call our function

function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a+b;
    }
    console.log(sum());
}
showThis(4,5); // will return Window or Global Object in NodeJS but if no 'use strict'

const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this);
        function shout(){
            console.log(this); // will lose context of obj 
        }
        shout();
    }
}
obj.sum()

function sayName(lastName){
    console.log(this);
    console.log(this.name+lastName);
}
const user = {
    name:'John'
}
// CALL and APPLY
sayName.call(user, ' Smith'); // just a value
sayName.apply(user, [' Green']); // apply used array for arguments in the function

//BIND
function count(num){
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
/*Conclusion: 1) Regular function: this == Window
            2) With 'use strict' will be undefined
            3) Context of obj methods is an object itself
            4) used if object constructed with 'new' operator
            new instance of an obj
            5) used as a context for 'call' and 'apply' functions
            Manual attach of this : call, apply, bind
*/

