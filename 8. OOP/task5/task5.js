// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class

class Shape{
    calculateArea(){
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    calculateArea(){
        let circleArea =  (3.142 * (this.radius * this.radius));
        console.log(`Area of the circle is: ${circleArea}`)
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        let triangleArea =  0.5 * this.base * this.height;
        console.log(`Area of the triangle is: ${triangleArea}`)
    }
}

const circle1 = new Circle(2);
circle1.calculateArea();

const triangle1 = new Triangle(2,4);
triangle1.calculateArea();