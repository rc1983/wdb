var person = {
    name: "xyz",
    // without double quotes means that this is a number
    age: 30, 
    city: "Night City"
};

console.log(person.name, person.age, person.city);

// bracket notation
console.log("This is printing the details using the bracket notation")
console.log(person["name"], person["age"], person["city"]);

// how to look up an element

var str = "name";

console.log("Look up of name: " + person[str]);

// increasing the age

person.age += 1;

// after age is increased

console.log(person.name, person.age, person.city);

// change the name of the person

person.name = "v";

console.log(person.name, person.age, person.city);

// a different want to initialize an object

var car = new Object();

car.model = "Dodge";
car.make = "Neon";
car.miles = 100000;

// print out the details of the car

console.log(car.model, car.make, car.miles)

//nested objects and arrays

var posts = [
    {
        title: "some title",
        author: "some author",
        comments: ["good post", "bad post"]
    },
    {
        title: "some other title",
        author: "some other author",
        comments: ["good post", "bad post"]
    }
]

console.log(posts[0]);