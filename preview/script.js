const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('You clicked');
// }
// //this action will go to queue and happen after the first one
// btn.addEventListener('click', ()=>{
//     alert("Clicked again");
// });

// btn.addEventListener('mouseover', ()=>{
//     alert("Hoverrrrrrr");
// });

// btn.addEventListener('mouseenter',(e)=>{
//     e.target.style.backgroundColor = 'red';
// });
let i=0;
 const deleteElement = (e) => {
     console.log(e.target);
     i++;
     if(i==1){
        btn.removeEventListener('click', deleteElement);
     }
 }
btn.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(event.target);
})



