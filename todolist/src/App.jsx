
import { Navbar } from './components/navbar' 
import { Task } from './components/task'
import { useState } from 'react'


function App() {

  let [tasks, setTasks] = useState([]);
  let [taskDesc, setTaskDesc] = useState("");

  /*let testTask = {
    desc: "Do Laundry",
    isDone: false
  }*/

  let addTask = (e) => {
    e.preventDefault();

    let newTask = {
      desc: taskDesc,
      isDone: false
    }

    setTasks([...tasks, newTask])

    console.log(tasks);
  }

  return (
    <>
      <Navbar />
      <div className="card">
        <div>
           {tasks.map((task, i) => <Task key={i} Task={task}/>)}
        </div>
        <form onSubmit={(e) => addTask(e)}>
          <input type="text" placeholder='Enter Task...' onChange={(e) => setTaskDesc(e.target.value)}/>
        </form>
          <button>Add Task</button>
          

      </div>
    </>
  )
}

export default App