import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import InputArea from "./InputArea";

function App() {

 
  const [items,setItems]=useState([])

  
  function  addItems(inputText) {
    setItems(prevItems => {
     return [...prevItems,inputText];
     
    });
       
  }
  function  deleteItem(id) {
    
    setItems(prevItems=>{ 
      return prevItems.filter((items,index) => { 
        return index!==id;
      });
     });
    
  }

  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea
     onAdd={addItems}
     />
      <div>
        <ul>
           { items.map(  (todoItems,index) =>  (
            <ToDoItems
              key= {index}
              id= {index}
               text={todoItems}
               onChecked={deleteItem}


            />
            ) ) }
        </ul>
      </div>
    </div>
  );
}

export default App;
