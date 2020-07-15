const log = function(a,b, ...args){
    console.log(a,b,args); //args is an array
    console.log(a,b,...args); // args are separate elements now
}

log('basic','rest','operator','usage');

//Silent arguments
function calcOrDouble(number, base){
    base = base || 2;
    console.log(number*base);
}

calcOrDouble(3,5);
calcOrDouble(3);//we didnt use 2nd argument which means default one will be used

//ES6 default arguments directly in parameters

function calcOrDouble2(number, base = 2){
    console.log(number*base);
}

calcOrDouble2(3,5);
calcOrDouble2(3);