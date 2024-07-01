import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, UserDetailPage } from './routes'
import RootLayout from './routes/pages/root'
import UsersPages, { usersLoader } from './routes/pages/userPages'
import { userLoader } from './routes/pages/UserDetailPage'
import { UserAlbum, UserPost, UserTodos } from './routes/pages/UserInfo'
import { usePostLoader, userPostsLoader } from './routes/pages/UserInfo/UserPost'
import { UserTodosLoader } from './routes/pages/UserInfo/UserTodos'
import { UserAlbumsLoader } from './routes/pages/UserInfo/UserAlbum'
import AlbumDetails, { albumLoader } from './routes/pages/UserInfo/AlbumDetails'
import PostDetails, { postLoader } from './routes/pages/UserInfo/PostDetail'
import FavoritePage from './routes/pages/UserInfo/FavoritePage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
       index:true,
        element: <HomePage/>,
      },
      {
        path: "users",
        element: <UsersPages/>,
        loader:usersLoader
      },
      {
        path:"users/:userId",

        children: [
          {
            index:true,
            element: <UserDetailPage/>,
            loader:userLoader,
          },
          {
            path:"posts",
            element: <UserPost/>,
            loader:userPostsLoader,
          },
          {
            path:"albums",
            element: <UserAlbum/>,
            loader:UserAlbumsLoader
          },
          {
            path:"todos",
            element: <UserTodos/>,
            loader:UserTodosLoader
          },
        ]
      },
      {
        path:"users/:userId/albums/:albumId",
        element:<AlbumDetails/>,
        loader:albumLoader,
      },{
        path:"users:/userId/posts:/postId",
        element: <PostDetails/>,
        loader:postLoader
      },
      {
        path:"favorites",
        element:<FavoritePage/>,
        
      }
      
    ]
  },
 ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
