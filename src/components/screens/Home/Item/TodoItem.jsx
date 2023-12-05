import React from 'react'
import Check from './Check'
import { FiTrash } from 'react-icons/fi'
import { PiPencilLineDuotone } from 'react-icons/pi'
import { useState } from 'react';

const TodoItem = ({todo, changeTodo, deleteTodo, editTodo}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.title)

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    if (newText !== '') {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div className='main'>
      {isEditing ? (
        <input className='input editT'
          type='text'
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={handleKeyPress}
          onBlur={handleSave}
        />
      ) : (
        <button className='button complete' onClick={() => changeTodo(todo.id)} >
        <Check isCompleted={todo.isCompleted}/>
      
        {todo.isCompleted ? 
       <span className='main-line'>
          {todo.title}
       </span>
       :
       <span>
         {todo.title}
       </span>}
      </button>
      )}
      <button className='button edit' onClick={handleEdit}>
        <PiPencilLineDuotone size={30} />
      </button>
      <button className='button del' onClick={() => deleteTodo(todo.id)}>
        <FiTrash size={30} />
      </button>
    </div>
  );
};

export default TodoItem