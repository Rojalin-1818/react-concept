import React from 'react'
import WindNavbar from './WindNavbar'
import SlideBar from './SlideBar'
import CardSection from './CardSection'
import ClientTable from './ClientTable'

const WindtaskHome = () => {
  return (
    <>
    <WindNavbar/>
    <div className='w-[100%] h-auto flex border-2'>
    <SlideBar/>
    <div className='border-none w-[100%] p-7 flex flex-col gap-5 bg-blue-100'>
      <h1 className='font-extrabold text-2xl'>Dashboard</h1>
      <div className='h-[10%] w-[100%] flex justify-between items-center p-5 rounded-[10px] bg-[#9b06f8] text-white'>
        <span>Star this project on Github</span>
        <span>View more</span>
      </div>

      <div className='h-[25%] w-[100%]'>
        <CardSection/>
      </div>
      <ClientTable/>
      
    </div>
    </div>
    
    </>
  )
}

export default WindtaskHome