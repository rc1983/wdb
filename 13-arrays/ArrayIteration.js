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
}