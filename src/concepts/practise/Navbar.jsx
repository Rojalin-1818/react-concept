import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[67px] w-[100%] flex items-center justify-around bg-amber-400 text-white'>
        <div className='h-full w-[20%] px-15 py-5 font-bold tracking-widest uppercase text-xl'>logo</div>
        <ul className='h-auto w-[40%] flex items-center justify-between text-[17px] font-medium h-[]'>
            <li className= 'p-3 hover:bg-amber-500 rounded-lg '><Link to="/Home">Home</Link></li>
            <li className= 'p-3 hover:bg-amber-500 rounded-lg '><Link to="/About">About</Link></li>
            <li className= 'p-3 hover:bg-amber-500 rounded-lg '><Link to="/Project">Project</Link></li>
            <li className= 'p-3 hover:bg-amber-500 rounded-lg '><Link to="/Contact">Contact</Link></li>
        </ul>
        <button className='border-2 px-6 py-2 rounded-xl font-medium text-lg'>Login</button>

    </div>
  )
}

export default Navbar