import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";


function App() {

  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null ) return []

    return JSON.parse(localValue)
  })
// run the func every time the second array property object change
 useEffect(()=>{
  localStorage.setItem("ITEMS", JSON.stringify(todos)) // storing info in local but cnt get it
 },[todos])


 function addTodo(title){
      //currentTodo  make func for adding multiple array for todos
        setTodos((currentTodos)=>{
          return [
          
            ...currentTodos, 
            {id: crypto.randomUUID(), title, completed: false}
          ]
      })
 }

   function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed} // brand new func
        }
        return todo
      })
    })
   }

   function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
   }

  
  return (
    <>
     <NewTodoForm onSubmit={addTodo}/>
     <h1 className="header">Todo List</h1>
     <TodoList todos={todos} 
     toggleTodo={toggleTodo} 
     deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
