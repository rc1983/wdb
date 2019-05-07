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