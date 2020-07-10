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

const wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart');

console.log(hearts); // NodeList

hearts.forEach(item=>{ // only used with querySelector
    console.log(item);
});

const oneHeart = wrapper.querySelector('.heart');
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
const div = document.createElement("div");
const text = document.createTextNode('Here I am');
div.classList.add('black');
// wrapper.append(div);
// wrapper.appendChild(div);  old way to do this
// wrapper.prepend(div);
// hearts[0].before(div);
//hearts[0].after(div);
wrapper.insertBefore(div,hearts[2] );
//circles[0].remove();
//wrapper.removeChild(hearts[1]);   oldway
hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0])  oldway


div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello"; //will be working only with strings not html tags

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')