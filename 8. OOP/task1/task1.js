// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details


class person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayPersonDetail(){
        console.log(`name: ${this.name}, age: ${this.age}, country: ${this.country}`);
    }
}

const person1 = new person("fahad", 24, "pakistan");
console.log(person1.displayPersonDetail());