// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`doors: ${this.doors}`)
    }
}

const car1 = new Car("Honda", "city", 2020, 4);
console.log(car1.displayDetails());