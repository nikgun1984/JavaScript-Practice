'use strict';

const person = {
    name: 'Alex',
    tel: '+19176954356',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
// In order to send information to server we need to convert our objects to JSON objects

console.log(JSON.stringify(person));

// To process JSON after getting it and convert it to object data we can parse it
console.log(JSON.parse(JSON.stringify(person)));

//Deep Copies

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(clone);
console.log(person);




