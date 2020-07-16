const test = time => {
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),time);
    }); //as a rule of thumb we can only return resolve or reject this is why only need resolve
}

// test(1000).then(()=>console.log('1000 ms'));
// test(2000).then(()=>console.log('2000 ms'));

//we need it if all promises are completed, all 4 promises went thru and resolved
Promise.all([test(1000),test(2000),test(3000),test(4000)]).then(()=>{
    console.log('All');
});
//which Promise will be done first
Promise.race([test(1000),test(2000),test(3000),test(4000)]).then(()=>{
    console.log('All');
});