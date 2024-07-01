import React from 'react'
import { useLoaderData} from 'react-router-dom'

interface  PostParams{
  userId:number,
  id:string,
  title:string,
  body:string
}

export const userPostsLoader = async ({params}:any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts/`)
  const posts = await response.json()
  return posts 
}

function UserPost() {
  const posts = useLoaderData()  as PostParams[]
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (<li key={post.id}>{post.body}</li>))}
      </ul>
    </div>
  )
}

export default UserPost
