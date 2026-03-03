import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <div className='w-screen h-19.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 flex items-center justify-around p-3.5'>
    <div className='w-[15%] h-full flex items-center justify-center font-extrabold text-3xl font-serif tracking-wider text-white'>Logo
    </div>
    {/* <div className='w-[15%] h-full flex items-center justify-center bg-blue-100 '>Logo
    </div> */}
        <ul className='w-[40%] h-full flex items-center justify-around text-white'>
        <li className='p-2 hover:bg-cyan-100 cursor-pointer rounded-lg capitalize text-lg font-bold hover:underline'><Link to="/home">home</Link></li>
        <li className='p-2 hover:bg-cyan-100 cursor-pointer rounded-lg capitalize text-lg font-bold hover:underline'><Link to="/about">about</Link></li>
        <li className='p-2 hover:bg-cyan-100 cursor-pointer rounded-lg capitalize text-lg font-bold hover:underline'><Link to="/project">project</Link></li>
        <li className='p-2 hover:bg-cyan-100 cursor-pointer rounded-lg capitalize text-lg font-bold hover:underline'><Link to="/contact">contact</Link></li>
        </ul>
        <button className='px-7 py-2 rounded-lg cursor-pointer bg-amber-300 text-lg font-medium hover:bg-blue-700 hover:text-white'><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Navbar