import React, { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {

    // id, text, done

    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
