'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth; 
const height = box.clientHeight;
console.log(width, height);


const widthWithPadding = box.offsetWidth;
const heightWithPadding = box.offsetHeight;
console.log(widthWithPadding, heightWithPadding);

//sizes of scrolls
const widthScroll = box.scrollWidth;
const heightScroll = box.scrollHeight;
console.log(widthScroll, heightScroll);

//will unfold text and scroll will disappear 
// btn.addEventListener('click',()=>{
//     box.style.height = box.scrollHeight + 'px';
// });

btn.addEventListener('click',()=>{
    //will show you how much content u have read already
    console.log(box.scrollTop);
});

//will get all coordinates that the method has. left right top bottom boundaries
console.log(box.getBoundingClientRect());

//the count will be from left to right of the elemnt, or from bottom to the bottom of the element
const style = window.getComputedStyle(box);
console.log(style);


// Scroll methods on window

window.scrollBy(0,400); // current position relative
window.scrollTo(0,400) // all the page not relative page