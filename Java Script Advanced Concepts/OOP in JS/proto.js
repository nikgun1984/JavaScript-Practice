//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.lastYear = function(){
    return this.getFullYear()-1;
}
new Date('1900-10-10').lastYear()
//'1899'



//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
Array.prototype.map = function(){
    const arr = [];
    for(let i=0;i<this.length;i++){
      arr.push(this[i]+'🗺');
    }
    return arr.join(', ');
  }
  console.log([1,2,3].map())
  //1🗺, 2🗺, 3🗺


//How would you be able to create your own .bind() method using call or apply.

Function.prototype.bind = function(calling){
    const self = this;
    return function(){
        return self.apply(calling,arguments);
    }
}