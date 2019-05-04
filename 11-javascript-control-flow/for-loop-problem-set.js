function printAllNumbersBetween10And19()
{
    console.log("Print all numbers between -10 and 19");

    for (var i = -10; i <= 19; i++)
    {
        console.log(i);
    }
}

function printEvenNumbers(startingNumber)
{
    console.log("Print all even numbers between " + startingNumber + " and 40.")
    for (var i = startingNumber; i < 40; i++)
    {
        if (i % 2 === 0)
        {
            console.log(i);
        }
    }
}

function printOddNumbers(startingNumber)
{
    console.log("Print all odd numbers between " + startingNumber + " and 333");
    for (var i = startingNumber; i < 333; i++)
    {
        if (i % 2 === 1)
        {
            console.log(i);
        }
    }
}

function printAllNumbersDivisibleBy5And15()
{
    console.log("All numbers divisible between 5 and 15 between 5 and 50");
    for (var i = 5; i <= 50; i++)
    {
        if (i % 15 === 0)
        {
            console.log(i);
        }
    }
}

function runForLoops()
{
    alert("Click OK to proceed.");
    printAllNumbersBetween10And19();
    printEvenNumbers(10);
    printOddNumbers(300);
    printAllNumbersDivisibleBy5And15();
}