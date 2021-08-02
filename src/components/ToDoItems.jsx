import React   from "react";

function ToDoItems(props) {  

    return  <li onClick={ ()=> {
        props.onChecked(props.id);
    }}>{props.text}</li>

    
}
export default ToDoItems;