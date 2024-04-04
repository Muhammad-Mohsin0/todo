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
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
      <label htmlFor="item"> New Item </label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className="btn"> Add</button>
     </form>
)
}

export default NewTodoForm;