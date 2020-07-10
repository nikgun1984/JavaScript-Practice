//touchstart - touching the element to trigger the event
//touchmove  - moving a finger
//touchend - after removing your fingers from the screen

//touchenter - will be triggered if enter the element
//touchleave
//touchcancel - going out of browser view

//touches  --- number of fingers on the screen
//targetTouches
//changedTouches -- list of fingers that participating in touches


window.addEventListener('DOMContentLoaded',()=>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();
        console.log('Move');

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e)=>{
        e.preventDefault();
        console.log('End');
    })
});