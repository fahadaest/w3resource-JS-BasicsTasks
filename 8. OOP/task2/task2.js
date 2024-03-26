// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calArea(){
        return this.width * this.height;
    }

    calPerimeter(){
        return 2 * (this.width * this.height);
    }
}

const rectangle1 = new rectangle(10, 15);
console.log(rectangle1.calArea());
console.log(rectangle1.calPerimeter());