import React from 'react'
import NavBar from '../../Components/navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
