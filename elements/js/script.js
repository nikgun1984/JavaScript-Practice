"use strict";
/*jslint node: true */
// jshint esversion: 6
/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false, document:false */


const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); //pseudo array HTMLCollection
const btn = document.getElementsByTagName('button')[1]; // second button
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles); // HTMLCollection

const hearts = document.querySelectorAll('.heart');

console.log(hearts); // NodeList

hearts.forEach(item=>{ // only used with querySelector
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'aqua';

for(let i=0;i<hearts.length;i++){
    hearts[i].style.backgroundColor = 'green';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

// Creating Elements



