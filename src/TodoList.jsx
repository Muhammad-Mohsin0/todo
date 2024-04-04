import TodoItem from "./TodoItem";

function TodoList({todos,toggleTodo,deleteTodo}){
    return (
        <ul className="list">
     {todos.length === 0 && "No Todos"}
     {todos.map(todo =>{ //for repeating the array list
      return (
     <TodoItem {...todo}
     key={todo.id} 
     toggleTodo={toggleTodo} 
     deleteTodo={deleteTodo}
    //  id={todo.id} completed={todo.completed} title={todo.title} 
      />
      )
     })}
     </ul>
    )
}

export default TodoList;