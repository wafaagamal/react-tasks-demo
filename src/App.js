import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
const tasksData = require('./db');

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchTasks = async () => {
      // const res = await fetch('http://localhost:5000/tasks/');
      // const data = await res.json()
      setTasks(tasksData)
    }
    fetchTasks()
  }, [])
  const deleteTask = (id) => {
    setTasks(tasks.filter((obj) => obj.id !== id));
  }

  const addTask = (taskItem) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newtaskItem = { id, ...taskItem }
    setTasks([...tasks, newtaskItem]);
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));
  }

  return (
    <Router>
      <div className="container">
        <Header showAddTaskForm={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder} />
                ) : (
                  "No Tasks to Show"
                )}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          {/* <Route path='/about' Component={About} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;