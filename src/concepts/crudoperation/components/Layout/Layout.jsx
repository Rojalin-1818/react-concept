import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-[100vh] w-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout