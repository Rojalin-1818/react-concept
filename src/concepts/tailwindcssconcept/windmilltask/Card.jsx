import React from 'react'

const Card = ({title,value}) => {
  return (
    <div className='border-none h-[70px] w-[250px] p-2 bg-white rounded-[5px] flex gap-4'>
        <div className='w-[30px] h-[100%] flex items-center justify-center text-purple-600 '>
            <div className='border-1 bh-orange-300 rounded-full h-[30px] w-[40px] flex items-center justify-center  bg-purple-400 shadow-lg'></div>
        </div>
        <div className='h-[100%] w-[70%] flex flex-col '>
            <h4 className='font-mono'>{title}</h4>
            <h4 className='font-bold'>{value}</h4>
        </div>
    </div>
  )
}

export default Card