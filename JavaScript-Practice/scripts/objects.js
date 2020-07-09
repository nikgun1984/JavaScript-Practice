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
    }
});

console.log(numDetails);

const movies2 = [
    {
        movie: "Prometheus",
        rating: 7.8
    },
    {
        movie: "Logan",
        rating: 7.8
    },
    {
        movie: "Alien",
        rating: 7.8
    }
];

const mapMovies = movies2.map(function(m){
    return m.movie;
});

console.log(mapMovies); // using map





