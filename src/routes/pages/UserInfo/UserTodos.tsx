import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

interface Todos{
    userId: number,
    id: number,
    title: string,
    completed:boolean,
}

export const UserTodosLoader =  async ({params}:any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
  const todos = await response.json()
  return todos 
}

function UserTodos() {
  const todos = useLoaderData() as Todos[]
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
        <li key={todo.id}>       
            <input type='checkbox' checked = {todo.completed} readOnly />{todo.title}
        </li>
            ))}
      </ul>
    </div>
  )
}

export default UserTodos
