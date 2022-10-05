

function HeaderTitle() {
  return <h1>ToDo List</h1>
}

function HeaderBody(props) {
  return (
    <div className="input-block">
      <div className="input-wrapper">
        <input 
          type="text" 
          id="input"
          value={props.value}
          onChange={props.onChange}/>
      </div>
      <div className="button-wrapper">
        <button 
          id="button" 
          onClick={props.onClick}>
            Add Task
        </button>
      </div>
    </div>
  )
}

export function ToDoHeader(props) {
  return (
    <div className="todo-wrapper">
      <HeaderTitle />
      <HeaderBody 
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}/>
    </div>
  )
}