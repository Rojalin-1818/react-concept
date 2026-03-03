import React from 'react'
import Card from './Card'

const CardSection = () => {
    const cardData=[
        {
            title:"Total Clients",
            value:"6389"
        },
         {
            title:"Account Balance",
            value:"$ 46,760.89"
        },
         {
            title:"New Sales",
            value:"376"
        },
         {
            title:"Pending Contacts",
            value:"35"
        },
    ]
  return (
    <div className='h-[100%] w-[100%] flex justify-between items-center gap-6'>
        {
           cardData.map((ele, index) => {
    return (
        <Card key={index} title={ele.title} value={ele.value}/>
    )
})
        }

    </div>
  )
}

export default CardSection