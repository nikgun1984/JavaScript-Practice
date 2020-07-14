'use strict';

const now = new Date();
console.log(now);

const yesterday = new Date(2020,6,13); // month starts with 0
console.log(yesterday);

//timestamp start Jan, 1970

const start = new Date(0);
console.log(start);

//Components Date.prototype.<methods>. Methods of Date Prototype

console.log(now.getFullYear());
console.log(now.getMonth()); // will return 6-July because start from 0
console.log(now.getDate());
console.log(now.getDay()); // day of the week starting from Sun which is 0
console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());

console.log(now.getTime()); // since 1 Jan, 1970 in millisec

console.log(now.setHours(18));
console.log(now);

//PARSE METHOD

//new Date().parse('2020-07-14');

let str = new Date();

for(let i=0;i<100000;i++){
    let some = i ** 3;
}
let end = new Date();

alert(`Loop worked for ${end-str} milliseconds`);









