'use strict';

console.log('Data Request...'); //Synchronous code

const req = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Data Preparation...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
    },2000);
});

req.then((product) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            product.status = 'order';
            //reject();
            resolve(product);
        },2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(()=>{
    console.error('The error has occured')
}).finally(()=>{
    console.log('Finally');
    //in this block we can clean form data we entered in there.
});