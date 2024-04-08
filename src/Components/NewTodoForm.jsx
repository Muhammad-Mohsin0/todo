import { useState } from "react"

function NewTodoForm( {onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault() // click Add but value not erase 
        if(newItem === "") return 

       onSubmit(newItem)//property with title new item

      setNewItem("") //for New item "clear or grt empty"
      }
    

return (
    <form onSubmit={handleSubmit} className="form-area">
      <div className="form-text">
      <label htmlFor="item"> <h1>New Item </h1></label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" placeholder="add item ..."/>
      </div>
      <button className="button-add"> Add</button>
     </form>
)
}

export default NewTodoForm;