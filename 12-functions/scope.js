console.clear();
function doMath()
{
    // Scope of x is within the function only
    var x = 40;
    console.log("inside the function, x = " + x);
}

doMath();

var x = "hello";
console.log("outside the function, x = " + x);

var y = 99;

function doMoreMath()
{
    y = 100;
    console.log("inside the function, y = " + y);
}
doMoreMath();
console.log("outside the function, y = " + y);

var phrase = "hi there!";

console.log("outside of function, phrase = " + phrase);

function doSomething()
{
    var phrase = "goodbye!";
    console.log("inside function, phrase = " + phrase);
}

doSomething();