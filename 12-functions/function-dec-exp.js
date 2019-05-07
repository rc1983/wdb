function getFormData()
{
    var choice = document.getElementsByName("question");

    for (var i = 0; i < choice.length; i++)
    {
        if (choice[i].checked)
        {
            console.log("Choice is: " + choice[i].value);
            document.getElementById("ret").innerHTML = runQuestion(choice[i].value);
        }
    }
}


function runQuestion(choice)
{
    if (choice == 1)
    {
        console.log("Running the function for Question 1");
        function foo()
        {
            function bar()
            {
                return 3;
            }
            return bar();
            function bar()
            {
                return 8;
            }
        }
        return ("Output: " + foo());
    }

    else if (choice == 2)
    {
        console.log("Running the function for Question 2");

        function foo()
        {
            var bar = function ()
            {
                return 3;
            };
            return bar();
            var bar = function ()
            {
                return 8;
            };
        }
        return ("Output: " + foo());
    }

    else if (choice == 3) 
    {
        console.log("Running the function for Question 3");

        return ("Output: " + foo());
        function foo()
        {
            var bar = function ()
            {
                return 3;
            };
            return bar();
            var bar = function ()
            {
                return 8;
            };
        }
    }

    else
    {
        try
        {
            console.log("Running the function for Question 4");
            function foo()
            {
                return bar();
                var bar = function ()
                {
                    return 3;
                };
                var bar = function ()
                {
                    return 8;
                };
            }
            return ("Output: " + foo());
        } 
        catch(e)
        {
            return(e.message + "\n\r" + e.stack);
        }
    }
}
// question 1

// function foo()
// {
//     function bar()
//     {
//         return 3;
//     }
//     return bar();
//     function bar()
//     {
//         return 8;
//     }
// }
// alert(foo());

// question 2

// function foo()
// {
//     var bar = function ()
//     {
//         return 3;
//     };
//     return bar();
//     var bar = function ()
//     {
//         return 8;
//     };
// }
// alert(foo());

// question 3

// alert(foo());
// function foo()
// {
//     var bar = function ()
//     {
//         return 3;
//     };
//     return bar();
//     var bar = function ()
//     {
//         return 8;
//     };
// }

// // question 4

// function foo()
// {
//     return bar();
//     var bar = function ()
//     {
//         return 3;
//     };
//     var bar = function ()
//     {
//         return 8;
//     };
// }
// alert(foo());