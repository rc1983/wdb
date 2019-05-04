var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah" && answer !== "ya")
// {
//     var answer = prompt("Are we there yet?");
// }

while (answer.indexOf("yes") === -1 &&
    answer.indexOf("yeah") === -1 &&
    answer.indexOf("ya") === -1)
{
    var answer = prompt("Are we there yet?");
}

alert("We made it!!");