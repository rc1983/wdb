var friends = ["a", "b", "c", "d"];
var colors = ["red", "orange", "yellow"];
colors[3] = "green";
console.log("colors: " + colors);
colors[3] = "dark green";
console.log("colors: " + colors);
colors[6] = "yellow";
colors[10] = "violet";
console.log("colors = " + colors);
console.log("length of colors: " + colors.length);

// array methods

console.log("before push colors: " + colors);
//push also returns the length of the array
var length = colors.push("indigo");
console.log("length = " + length);
console.log("colors after push: " + colors);

console.log("colors before pop: " + colors);
var pop = colors.pop();
// pop returns the last item in the array that is removed
console.log("colors after pop: " + colors);
console.log("pop: " + pop);

// unshift adds an item to the beginning of an array
console.log("before shift: " + colors);
var unshift = colors.unshift("neon");
console.log("after unshift: " + colors);
console.log("unshift: " + unshift);

//shift removes an element from the beginning
console.log("before shift: " + colors);
var shift = colors.shift();
console.log("shift: " + shift);
console.log("after shift: " + colors);

//indexOf method
console.log("index of orange: " + colors.indexOf("orange"));
// when there are duplicate elements, the first index that is found is returned
console.log("index of yellow: " + colors.indexOf("yellow"));

//slice
var fruits = ["banana", "orange", "lemon", "apple", "mango"];
var citrus = fruits.slice(1, 3); //this would include elements 1, 2
console.log("citrus: " + citrus);