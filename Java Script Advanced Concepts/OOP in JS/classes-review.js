'use strict';

class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height*this.width;
    }
}

class ColoredRectWithText extends Rectangle {
    constructor(width,height,bgColor,text){
        super(width,height);
        this.bgColor = bgColor;
        this.text = text;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectWithText(25,10,'red','Hello World');
div.showMyProps();
console.log(div.calcArea);

const square = new Rectangle(10,10);
const long  = new Rectangle(20,100);
console.log(square.calcArea());
console.log(long.calcArea());


// 'Abstraction' is separation of idea or concept like class in this case from actual created object.
// 'Inheritance' 