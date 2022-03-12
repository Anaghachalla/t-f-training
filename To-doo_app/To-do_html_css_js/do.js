function create_todo()
{
    let todo = window.prompt("Enter todo!");


    //create necessary elements
    let new_todo = document.createElement("div");
    new_todo.className ="todo";
    new_todo.style.display ="flex";
    new_todo.style.flexDirection= "row";
    new_todo.style.justifyContent= "space-between";
    let todo_text = document.createElement('span');

    //let options_done_button = document.createElement("button");
    let delete_button = document.createElement("button");

    delete_button.className= "todo_op";
    delete_button.innerHTML= "Delete";
    delete_button.onclick=function(){
        this.parentNode.remove();
    }
    
    todo_text.innerHTML = todo;

    
    new_todo.appendChild(todo_text);
    new_todo.appendChild(delete_button);
    new_todo.onclick = function(){
        if (this.firstChild.style.textDecoration === "line-through")
        {
            this.firstChild.style.textDecoration = "none";
        }
        else
        {
            this.firstChild.style.textDecoration = "line-through";
        }};
    
    
    document.getElementById("tasks").appendChild(new_todo);
}



// function check_tasks()
// {
//     l = querySelector("#not-empty >div");
//     if (l.length!==0)
//     {
//         document.getElementById("empty").style.display = "none";
//     }
//     else
//     {
//         document.getElementById("not-empty").style.display = "none";
//     }
// }