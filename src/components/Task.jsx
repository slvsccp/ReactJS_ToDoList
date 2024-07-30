function Task({ task }) {

  console.log({ task })

  return (
    <li>
      <span>{task.text}</span>
      <button>Remover</button>
    </li>
  )
}

export default Task;