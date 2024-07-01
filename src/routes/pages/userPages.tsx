import { Link, useLoaderData } from 'react-router-dom'
import React from 'react'

interface User{
    id:number,
    name:string,
    username:string,
    email:string,
}
export  const usersLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users)
    return users 
}
function UsersPages() {
  const users = useLoaderData() as User[]
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) =>(<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>))}
      </ul>
    </div>
  )
}

export default UsersPages
