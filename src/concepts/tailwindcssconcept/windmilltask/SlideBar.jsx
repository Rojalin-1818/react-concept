import React from 'react'

const SlideBar = () => {
  return (
    <div  className='h-[90vh] w-[15%] bg-white shadow-xl/60 flex  flex-col items-center gap-3 '>
            <div><h3  className='font-semibold text-gray-700 mt-6'>Dashboard</h3></div>
             <div><h3 className='font-semibold text-gray-700 mt-6'>Forms</h3></div>
              <div><h3 className='font-semibold text-gray-700 mt-6'>Cards</h3></div>
               <div><h3 className='font-semibold text-gray-700 mt-6'>Charts</h3></div>
                <div><h3 className='font-semibold text-gray-700 mt-6'>Buttons</h3></div>
                    <div ><h3 className='font-semibold text-gray-700 mt-6'>Modals</h3></div>
                    <div><h3  className='font-semibold text-gray-700 mt-6'>Tables</h3></div>
                    <div ><h3 className='font-semibold text-gray-700 mt-6'>Pages</h3></div>
                   <div className='absolute-bottom-30px'> <button className='h-3vh border-2 border-fuchsia-200 p-2 bg-violet-800 '>create account</button></div>
                
        
    </div>
  )
}

export default SlideBar