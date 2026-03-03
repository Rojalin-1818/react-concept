import React from 'react'
import C3 from './C3'

const C2 = ({data}) => {
    let updateVal={...data,message:"i hate you"}
    console.log(data)
  return (
    <div><C3 data={updateVal}/></div>
  )
}

export default C2