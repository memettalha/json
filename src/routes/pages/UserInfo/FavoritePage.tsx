import React from 'react'
import { useStore } from '../../../store/store'
import { Link } from 'react-router-dom'

function FavoritePage() {
    const {favorites, removeFavorite} = useStore()
  return (
    <div>
      <h2>FavoritesPages</h2>
      <ul>
        {favorites.map((photo) => <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt="" />
            <p>{photo.title}</p>
            <p>By User:<Link to={`/users/${photo.userId}`}>{photo.userId}</Link></p>
            <button onClick={() => {removeFavorite(photo.id)}}>Remove</button>
        </li>)}
      </ul>
    </div>
  )
}

export default FavoritePage
