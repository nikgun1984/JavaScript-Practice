'use strict';

function multiply(num){
    return function(x){
        return x*num;
    };
}

const double = multiply(2);
console.log(double(2));


//Make function high school age with higher order functions

function makeBetweenFunc(from,to){
    return function(num){
        return num>=from && num <=to;
    }
}

const isTeen = makeBetweenFunc(15, 20);
console.log(isTeen(19));
console.log(isTeen(23));

const isNiceWeather = makeBetweenFunc(60, 80);
console.log(isNiceWeather(78));