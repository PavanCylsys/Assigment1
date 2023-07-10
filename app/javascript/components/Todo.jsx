import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <li>
        <h2>{todo.title}</h2>
        <p>{todo.note}</p>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleComplete(index)}
          />

      </li>
    </div>
  )
}

export default Todo
