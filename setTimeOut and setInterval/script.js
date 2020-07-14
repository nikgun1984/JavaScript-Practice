const timer = setTimeout(function(text){
    console.log(text)
},2000,'Hello'); // 'Hello' argument that goes into function
console.log(timer);
clearInterval(timer); // to drop timer if no longer needed, it wont show in console screen
const timerID = setTimeout(logger,2000); //logger function is used but not called with ()
console.log(timerID);

function logger(){
    if(i===4){
       clearInterval(timerId);
    }
    console.log('text');
    i++;
}

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     const timerID = setTimeout(logger,2000);
// })

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger,2000);
// });

//clearInterval(timerId);

//Recursive way to use setTimeout that will indefinitely loop
// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log,500)
// },500);

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    
    const id = setInterval(frame,10);
    function frame() {
        if(pos == 300){
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos + 'px'
        }
    }
}

btn.addEventListener('click', myAnimation);
