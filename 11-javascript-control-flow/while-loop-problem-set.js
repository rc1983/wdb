function printFrom10to19 () 
{
    
    console.log("Print all numbers between -10 and 19.");
    var count = -10;
    
    while (count <= 19)
    {
        console.log(count);
        count++;
    }
}

function printEvenNumbers(startingNumber) 
{
    console.log("Print all even numbers between " + startingNumber + " and 40.")
    while (startingNumber <= 40)
    {
        if (startingNumber % 2 === 0)
        {
            console.log(startingNumber);
        }

        startingNumber++;
    }
}

function printOddNumbers (startingNumber) 
{
    console.log("Print all odd numbers between 300 and 333");

    while (startingNumber <= 333) 
    {
        if(startingNumber % 2 === 1)
        {
            console.log(startingNumber);
        }
        startingNumber++;
    }
}

function printNumbersDivisibleBy5And15()
{
    console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
    var count = 5;
    while (count <= 50)
    {
        if (count % 15 === 0)
        {
            console.log(count);
        }
        count++;
    }
}

function runWhileLoops()
{
    alert("Click OK to proceed.");
    printFrom10to19();
    printEvenNumbers(10)
    printOddNumbers(300)
    printNumbersDivisibleBy5And15()
}

