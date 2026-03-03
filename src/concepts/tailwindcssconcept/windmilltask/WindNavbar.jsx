import React from 'react'
import { IoIosMoon } from "react-icons/io";
import { HiBell } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";




const WindNavbar = () => {
  return (
    <div className='w-[100%] h-[68px] p-4 flex justify-between items-center  bg-white shadow-lg '>
        <h1 className='uppercase'>windmill</h1>
        <div className='border-2 border-fuchsia-200 w-[40%] flex items-center gap-5 '>
                   <CiSearch /> <input type="search" placeholder='search for projects' className='w-[40%] '/>
        </div>
        <div className='flex items-center gap-5  h-auto '>
            <IoIosMoon />
            <HiBell/>
            <div className='h-[15%] w-[15%]  rounded-full' >
                <img src="" alt="" />
            </div>


        </div>
    </div>
  )
}

export default WindNavbar