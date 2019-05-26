function beginToDoList() 
{
    var toDoList = [];

    var input = prompt("What would you like to do?");

    while (input !== "quit") 
    {
        if (input === "new") 
        {
            var newToDo = prompt("Enter a new to do item: ");
            toDoList.push(newToDo);
            input = prompt("What would you like to do?");
        }
        else if (input === "list") 
        {
            console.log("To do list: " + toDoList);
            document.getElementById("list").innerHTML = "To do list: " + toDoList;
            input = prompt("What would you like to do?");
        }
        else
        {
            console.log("Unrecognized input. Try the following inputs - new, list, quit");
            input = prompt("What would you like to do?");
        }
    }
    console.log("Quit To Do List");
}