function Task(props) {
  return (
    <div className={props.completed ? 'output-item checked' : 'output-item'}>
      <div className="description">{props.text}</div>
      <div className="buttons">
        <input 
          id={props.id} 
          type="checkbox" 
          className="btn-complete" 
          onClick={props.onChecked}/> 
        <button 
          id={props.id} 
          className="btn-delete" 
          onClick={props.onClick}>
            Delete
        </button>       
      </div>
    </div>
  )
}

function ListOfTasks(props) {
  const arr = props.tasks;
  const list = arr.map(item =>
    <Task 
      key={item.id}
      id={item.id}
      text={item.text}
      completed={item.completed}
      onChecked={props.onChecked}
      onClick={props.onClick}
    />
  )
  return (
    <div>{list}</div>
  )
}

function TitleOfTasks() {
  return (
    <h2>Tasks for the day</h2>
  )
}

export function ToDoBody(props) {
  return (
    <div className="todo-wrapper">
      <TitleOfTasks />
      <ListOfTasks 
        tasks={props.tasks}
        onChecked={props.onChecked}
        onClick={props.onClick}/>
    </div>
  )
}