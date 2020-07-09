'use strict';

const personalMovieDB = {
    count: 3,
    movies: {
        "Prometheus": 8.6,
        "Logan": 8.4,
        "Walking Dead": 8.3
    },
    actors: {
        "Andrew Lincoln": 43,
        "Michael ROsenbaum": 44,
        "Hugh Jackman": 56
    },
    genres: ["Horror", "Sci-Fi", "Comedy"],
    private: false
};

console.log(Object.keys(personalMovieDB).length);

const {actors, movies} = personalMovieDB;
console.log(actors);
console.log(movies);



const arr = [2,4,6,8,5,9,0];

arr.forEach((item,i)=>{console.log(`${i}: ${item} of array 'arr'`);});

console.log(arr.indexOf(2));
console.log(arr.indexOf(3));//will return -1
console.log(arr.includes(3));//will return false

const arr2 = arr.reverse();
console.log(arr2);
const letters = ['T','C','E','P','S','E','R'];
const str = letters.reverse().join(' ');
console.log(str);

//SORTING

let animals = ['elephant', 'bison', 'camel', 'ant','duck'];
animals.sort();
console.log(animals);

//WITH NUMBERS

const arr3= [2,4,6,8,5,9,0];
arr3.sort((a,b)=> a-b);
console.log(arr3);


//SPLICE
let animals1 = ['elephant', 'bison', 'camel', 'ant','duck'];

// add element in place
animals1.splice(1,0,'octopus'); // Add element at 1st element, delete 0 elements
console.log(animals1);
//delete element
animals1.splice(4,1); // Add element at 1st element, delete 0 elements
console.log(animals1);
//replace element
animals1.splice(1,1,"duck"); // basically delete element and replace it with another element
console.log(animals1);

//Map

const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap','byob','rsvp','diy'];

const upperCaseWords = words.map((word)=>word.toUpperCase().split('').join('.'));
console.log(upperCaseWords);

const doubleVals = numbers.map(function(num){
    return num*2;
});
console.log(doubleVals);

const numDetails = numbers.map(function(num){
    return {
        value: num,
        isEven: num%2==0
    };
});

console.log(numDetails);

const movies2 = [
    {
        movie: "Prometheus",
        rating: 7.8
    },
    {
        movie: "Logan",
        rating: 8.5
    },
    {
        movie: "Alien",
        rating: 9.1
    }
];

const mapMovies = movies2.map(function(m){
    return m.movie;
});
//Using Arrow Functions
const mapMovies2 = movies2.map(m=>m.movie);

console.log(mapMovies); // using map
console.log(mapMovies2); // using map

//Find

const highRated = movies2.find(m=>m.rating>8);// will find first match NOT ALL RESULTS!!!
console.log(highRated);

//Filter

const nums = [34,3,5,54,76,46,45,31,90,97];

const oddNumbers = nums.filter(n=>n%2==1);
const bignumbers = nums.filter(n=>n>50);
console.log(oddNumbers);
console.log(bignumbers);

const allHighRated = movies2.filter(m=>m.rating>8); // WILL FIND ALL RESULTS AND ADD THEM TO LIST
console.log(allHighRated);

// Some and Every

const ws = ['dog','dot','not','cot','lot'];

const samelen = ws.every(w=>w.length==3);
const sameLetter = ws.every(w=>w[1]==='o');
const someLetter = ws.some(w=> w.includes('co'));
const someStartsWithD = ws.some(w=>w[0]=='t');
console.log(samelen);
console.log(sameLetter);
console.log(someLetter);
console.log(someStartsWithD);

//Spread Operator for Arrays and Objects

const array = ["a","b"];

//create a shallow copy of array

const newArray = [...array];

const obj = {
    one: 1,
    two: 2
};

const newObj = {...obj};



