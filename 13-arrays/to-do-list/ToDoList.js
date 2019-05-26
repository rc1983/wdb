var toDoList = [];

function beginToDoList() 
{
    var input = prompt("What would you like to do? Type: \"quit\" to exit");

    while (input !== "quit") 
    {
        if (input === "new") 
        {
            addNewElement();
        }
        else if (input === "list") 
        {
            listToDos();
        }
        else if (input === "delete")
        {
            deleteToDo();            
        }
        else
        {
            console.log("Unrecognized input. Try the following inputs - new, list, quit, delete");
            alert("Unrecognized input. Try the following inputs - new, list, quit, delete");
        }
        input = prompt("What would you like to do?");
    }
    console.log("Quit To Do List");
    document.getElementById("list").innerHTML = "Quit To Do List";
}

function addNewElement()
{
    do 
    {
        newToDo = prompt("Enter a new to do item (Enter done to exit): ");
        if(newToDo !== "done")
        {
            toDoList.push(newToDo);
            console.log("Added: " + newToDo);
        }
    }
    while (newToDo !== "done")
}

function listToDos()
{
    console.log("*****");
    toDoList.forEach(todo);
    function todo(element, index)
    {
        console.log(index + ": " + element);
    }
    console.log("*****");
    console.log("To do list: " + toDoList);
    document.getElementById("list").innerHTML = "To do list: " + toDoList;
}

function deleteToDo()
{
    var index = Number(prompt("Enter the index to delete."));
    if(!index=="NaN" && (index < toDoList.length))
    {
        console.log("Deleting the following element: " + toDoList[index]);
        // index of the element you want to delete, and the number elements to delete. 
        // to delete only one element, use 1
        toDoList.splice(index,1)
    }
    else
    {
        console.log("Invalid input: " + index);
    }
}