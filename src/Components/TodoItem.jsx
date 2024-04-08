function TodoItem({completed, id, title, toggleTodo,deleteTodo}){
   
    return(
      
        <li>
        <label>
         <input type="checkbox" checked={completed}
           onChange={e => toggleTodo(id, e.target.checked)}
         />
         <span style={{ textDecoration: completed ? 'line-through'  : 'none',
         color: completed ? 'grey' : 'black' }}>
            {title}
          </span>
        </label>
        
        <button 
        onClick={() => deleteTodo(id)} //passing the func
        className="button-del">Delete</button>
       </li> 
      
       
    )
}
export default TodoItem;