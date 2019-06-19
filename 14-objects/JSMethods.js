var obj = 
{
    name: "xyz",
    age: 40,
    isTrue: true,
    friends: [ "abc", "def" ],
    add: function (x, y)
    {
        return x + y;
    }
}

var dogSpace = {};

dogSpace.speak = function ()
{
    return "WOOF";
}

var catSpace = {};

catSpace.speak = function ()
{
    return "MEOW!";
}

var comments = 
{
    data: ["comment1", "comment2", "comment3"]
}

// function print(arr)
// {
//     arr.forEach(function(el)
//     {
//         console.log(el);
//     });
// }

// print(comments.data);

comments.print = function()
{
    // "this" refers to the Object, comments
    console.log("This is coming from the print function");
    this.data.forEach(function(el)
    {
        
        console.log(el);
    });
}

comments.print();