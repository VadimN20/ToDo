import React from 'react'
import TodoItem from './Item/TodoItem'
import { useState } from 'react';
import AddTodoField from './Add-todo-field/AddTodoField';

const data = [
{
    id: '1',
    title: 'Finish something',
    isCompleted: false,
},
{
    id: '2',
    title: 'Read something',
    isCompleted: false,
},
{
    id: '3',
    title: 'Training',
    isCompleted: false,
}  
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const deleteTodo = id => {
        const updateDelTodos = todos.filter(t => t.id !== id)
        setTodos(updateDelTodos)
    }

    const editTodo = (id, newTitle) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: newTitle };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    
        
  return (
    <div className='body'>
        <h1>ToDo list</h1>
        {todos.map(todo => (
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
        ))}
        < AddTodoField setTodos={setTodos} /> 
    </div>
  )
}

export default Home