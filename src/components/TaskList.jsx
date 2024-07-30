import Task from "./Task";

function TaskList({ tasks, onDeleteTask, onToggleTaskDone }) {
  if (tasks.length === 0) return <p style={{ textAlign: "center" }}>Não há registros.</p>

  return (
    <ul>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onToggleDone={() => onToggleTaskDone(task.id)}
          />
        ))
      }
    </ul>
  )
}

export default TaskList;