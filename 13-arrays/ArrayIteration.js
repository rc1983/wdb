// this method is used because javascript file loads at the beginning, and this would
// cause innerHTML of null error
// https://stackoverflow.com/questions/18239430/cannot-set-property-innerhtml-of-null
window.onload = function()
{
    var colors = ["red", "green", "blue"];
    function simpleForLoop() 
    {
        for (var i = 0; i < colors.length; i++)
        {
            document.getElementById("forLoop").innerHTML = colors;
            console.log(colors[i]);
        }   
    }
    simpleForLoop();

    colors.forEach(function(i)
    {
        document.getElementById("forEach").innerHTML = colors;
        console.log(i);
    });

    function printColors(color) 
    {
        document.getElementById("forEachFunction").innerHTML = colors;
        console.log("***********");
        console.log(color);
        console.log("***********");
    }
    colors.forEach(printColors);
    colors.forEach(function(el, i, arr)
    {
        console.log("el: " + el + ", i: " + i + ", arr: " + arr);
    });
    // second example
    console.log("The following output is from a function that is being called by forEach");
    function logElements(el, i, arr)
    {

        console.log("el: " + el + ", i: " + i + ", arr: " + arr);
    }
    colors.forEach(logElements);
}