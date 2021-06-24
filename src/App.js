import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState} from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState (false)   

  const [tasks, setTasks] = useState([
   
    {
        id: 1,
        text: 'Shopping',
        day: 'June 22nd at 2:30pm',
        remidner: false,
    },
    {
        id: 2,
        text: 'Workout',
        day: 'June 23rd at 7pm',
        remidner: true,
    },
    {
        id: 3,
        text: 'Movie',
        day: 'July 21st at 9:30pm',
        remidner: false,
    },
    {
        id: 4,
        text: 'Exam',
        day: 'May 21st at 9am',
        remidner: false,
    }
])
//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 )+ 1;
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id!== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
     <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />

     {showAddTask && <AddTask onAdd={addTask} />}


     {tasks.length >0 ?<Tasks tasks={tasks} onToggle={toggleReminder} 
     onDelete={deleteTask} /> 
     :
      'No Tasks To Show.'}
  
    </div>
  

  );
}


// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class.</h1>
//   }
// }



export default App; 
