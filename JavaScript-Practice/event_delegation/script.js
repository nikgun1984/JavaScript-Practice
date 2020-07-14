const btns = document.querySelectorAll('button');
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// btns[1].classList.add('red');
// //console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click',()=>{
    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('red')
    // }

    //We also can use toggle to switch between colors
    btns[1].classList.toggle('red');
    
    
    //DELEGATION
    //Method of event delegation even if you dynamically add element you will be able 
    //to do some action on it
    wrapper.addEventListener('click', (event)=>{
        if(event.target && event.target.tagName == 'BUTTON'){
            console.log('hello');
        }
    });

    wrapper.addEventListener('click', (event)=>{
        if(event.target && event.target.matches('button.red')){
            console.log('hello there');
        }
    })
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);