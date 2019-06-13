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

        else if (userInput == 5)
        {
            enterElements();
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

}

function printReverse()
{
    console.log("Printing the reverse of the array");
    for (var i = items.length-1; i >= 0; i--)
    {
        console.log(items[i]);
    }
}

function isUniform()
{
    var firstItem = items[0];
    for (var i = 0; i < items.length; i++)
    {
        if (firstItem != items[i])
        {
            console.log(firstItem + " is not equal to " + items[i]);
            return;
        }
    }

    console.log("This is a uniform array");
}

function arraySum()
{
    var total = 0;

    for (var i = 0; i < items.length; i++)
    {
        total = total + Number(items[i]);
    }

    console.log("The sum of elements in the array: " + total);
}

function arrayMax()
{
    var max = 0;

    for (var i = 0; i < items.length; i++)
    {
        if (max < Number(items[i]))
        {
            max = Number(items[i]);
        }
    }

    console.log("The maximum value is: " + max);
}