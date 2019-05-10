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

// function fac()
// {
//     var input = document.getElementById("fac");

//     var num = Number(input.value);



//     if (!(num == "NaN"))
//     {
//         document.getElementById("fac").innerHTML = "The factorial is: " + Math.;
//     }
//     else
//     {
//         document.getElementById("fac").innerHTML = input.value + " is not a number";
//     }
// }

getFactorial(3)

function getFactorial(num)
{
    if (num == 0)
    {
        return 1;
    }
    else
    {
        console.log(num);
        console.log(num * (getFactorial(num-1)));
    }
}