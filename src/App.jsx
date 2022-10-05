import { useState } from 'react'
import {ToDoHeader} from './Header.jsx'
import {ToDoBody} from './List.jsx'


function ToDoApp() {

  let [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function handleAddTask() {
    if(!text) return;
    const task = {
      text,
      completed: false,
      id: Date.now(),
    }
    setTasks(tasks.concat(task));
    setText('');
    console.log(tasks);
  }

  function handleSaveText(e) {
    setText(e.target.value);
  }

  function handleCheckedTask(e) {
    const taskId = Number(e.target.id);
    const checkedTasks = tasks.map(el => 
      el.id !== taskId ? el : {text: el.text, completed: !el.completed, id: el.id}
    );
    filterCompletedTasks(checkedTasks);
  }

  function filterCompletedTasks(checkedTasks) {
    const activeTasks = checkedTasks.filter(el => !el.completed);
    const completedTasks = checkedTasks.filter(el => el.completed);
    tasks = [...activeTasks, ...completedTasks];
    setTasks(tasks);
  }

  function handleDeleteTask(e) {
    const taskId = Number(e.target.id);
    const filteredTasks = tasks.filter(el => el.id !== taskId);
    setTasks(filteredTasks);
  }

  return (
    <div>
      <ToDoHeader 
        value={text}
        onClick={handleAddTask}
        onChange={handleSaveText}/>
      <ToDoBody 
        tasks={tasks}
        onChecked={handleCheckedTask}
        onClick={handleDeleteTask}/>
    </div>
  )
}

export default ToDoApp;





