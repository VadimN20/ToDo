import React from 'react'

const editTodo = () => {
    const editTodo = id => {
        const editTodoNum = todos.filter(t => t.id === id)
        console.log(editTodoNum)
      }



  return (
    <div>editTodo</div>
  )
}

export default editTodo