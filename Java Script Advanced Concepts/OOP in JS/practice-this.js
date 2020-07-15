const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this); // will return button itself if classic way of writing a function
//     this.style.backgroundColor = 'red';
//     this.innerHTML = 'Click Me!!!';
// });

/* If you will use arrow function on listener it will return undefined
btn.addEventListener('click', ()=>{
    console.log(this); // will return button itself if classic way of writing a function
    this.style.backgroundColor = 'red'; // 'this' keyword is window now thats why undefined
    this.innerHTML = 'Click Me!!!';
});
*/

//In order to fix this and use arrow function use instead of 'this'
btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    event.target.innerHTML = 'Click Me!!!';
});



const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {  // arrow function will take context from its parent 
            console.log(this.num); // which is [Function: sayNumber]
        }

        say();
    }
}

obj.sayNumber();

const double = a => a*2;