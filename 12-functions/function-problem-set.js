function evenNumberTest()
{
    var input = document.getElementById("numberInput");

    var num = Number(input.value);

    if (num == "NaN") 
    {
        document.getElementById("evenNumberTest").innerHTML = input.value + " is not a number";
    }
    else if (num % 2 == 0)
    {
        document.getElementById("evenNumberTest").innerHTML = num + " is even.";
    }
    else
    {
        document.getElementById("evenNumberTest").innerHTML = num + " is odd.";
    }
}

function getFactorial()
{
    var input = document.getElementById("factorialInput");

    var num = Number(factorialInput.value);

    if (!(num == "NaN"))
    {
        document.getElementById("fac").innerHTML = "The factorial is: " + calculateFactorial(num);
    }
    else
    {
        document.getElementById("fac").innerHTML = input.value + " is not a number";
    }
}

function calculateFactorial(num)
{
    if (num == 0)
    {
        return 1;
    }
    else
    {
        return (num * calculateFactorial(num - 1));
    }
}

function kebabToSnake()
{
    var input = document.getElementById("textArea").value;
    input = input.replace("-", "_");
    document.getElementById("switchedText").innerHTML = input;
}