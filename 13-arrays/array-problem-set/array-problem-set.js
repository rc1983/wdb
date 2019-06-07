var items = [];

function clickToBegin()
{
    enterElements();

    var userInput = prompt("Enter the array operation: ");

    while (userInput != "quit")
    {
        if (userInput == 1)
        {
            printReverse();
        }

        else if (userInput == 2)
        {
            isUniform();
        }

        else if (userInput == 3)
        {
            arraySum();
        }

        else if (userInput == 4)
        {
            arrayMax();
        }

        else
        {
            console.log("Invalid input. Try again");
        }

        userInput = prompt("Enter the array operation: ");
    }

    console.log("Quit the application");
}

function enterElements()
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
}

function item(element, index)
{
    console.log(element + "," + index);
}

function printReverse()
{
    console.log("Printing the reverse of the array");
    for (var i = items.length; i >= 0; i--)
    {
        console.log(items[i]);
    }
}

function isUniform()
{
    // items.forEach(item);
}

function arraySum()
{
    // items.forEach(item);
}

function arrayMax()
{
    // items.forEach(item);
}