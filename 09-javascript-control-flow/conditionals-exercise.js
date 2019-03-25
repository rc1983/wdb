window.setTimeout(function conditionals() 
{
    var age = prompt("Enter your age in years: ");

    if (age < 18) 
    {
        console.log("You cannot enter the club");
    }

    else if (age < 21) 
    {
        console.log("You may enter, but you cannot drink alcohol.");
    }

    else
    {
        console.log("You may enter.");
    }

    if(age % Math.sqrt(age) === 0)
    {
        console.log(age + " is a perfect square!");
    }

    // isPerfectSquare(age);

}, 500);

// function isPerfectSquare(number) 
// {
//     for (var i = 0; i  < number; i++)    
//     {
//         if (i * i == number)
//         {
//             console.log(number + " is a perfect square");
//         }
//     }
// }