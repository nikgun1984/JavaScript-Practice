'use strict';

//filter

const names = ['Ivan','Nick', 'Mark', 'Robert', 'Ricardo'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);


//map

let answers = ['IvAn', 'AnnA','Hello'];

answers = answers.map(word => word.toLowerCase()); // rewrite our array, not a good practice though
console.log(answers);

//every/some
//some ---> at least one is true then it will return true just like with OR(||) operator
const some = [4,'fsjhf','sdhvbhs'];

console.log(some.some(item=>typeof(item)==='number'));

//every ===> if at least one is false, it will return false just like with AND(&&) operator

const every = [4,'fsjhf','sdhvbhs'];

console.log(every.every(item=>typeof(item)==='number'));

//reduce

const arr = [4,5,6,7,8,1,6];
// Solution we can use forEach and add all the numbers

let total = 0;
arr.forEach((item)=> {
    total +=item
});
console.log(total);

const res = arr.reduce((total,current)=> total+current);
//                       0      4
//                       0+4    5
//                       4+5    6...
console.log(res);

const fruit = ['pear','apple','plum'].reduce((total,item)=> total+', '+item);
console.log(fruit);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
}

const entries = Object.entries(obj)
.filter(item=>item[1]==='person')
.map(item=>item[0]);
console.log(entries); 









