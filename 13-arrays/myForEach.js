var items = []

function clickToBegin()
{
    addNewElement();
}

function addNewElement()
{
    do 
    {
        newItem = prompt("Enter a new element (Enter done to exit): ");
        if (newItem !== "done")
        {
            items.push(newItem);
            console.log("Added: " + newItem);
        }
    }
    while (newItem !== "done");

    myForEach(items, alert);
    items.myForEach2(console.log);
}

function myForEach(arr, func)
{
    // loop through the array
    for (var i = 0; i < arr.length; i++)
    {
        // call func for each item in the array
        func(arr[i]);
    }   
}

Array.prototype.myForEach2 = function (xyz)
{
    for (var i = 0; i < this.length; i++)
    {
        xyz("myForEach2: "  + this[i]);
    }
}