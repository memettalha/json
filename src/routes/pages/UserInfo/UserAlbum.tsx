import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

interface Albums {
  userId: number,
    id: number,
    title:string,
}

export const UserAlbumsLoader = async ({params}:any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
  const albums = response.json()
  return albums
}
function UserAlbum() {
  const albums = useLoaderData() as Albums[]
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (<li key={album.id}><Link to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</Link></li>))}
      </ul>
    </div>
  )
}

export default UserAlbum
