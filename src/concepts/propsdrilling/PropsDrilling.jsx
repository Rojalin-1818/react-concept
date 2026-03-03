import React from 'react'
import C1 from './C1'

const PropsDrilling = () => {
    const data={
        username:"sundari",
        message:"i love you"
    }
  return (
    <div><C1 data={data}/></div>
  )
}

export default PropsDrilling 
//form the topmost component to innermost component whatever component in between must pass the data is known as propsdrilling.
//intermediate components can change the while passing the data from parent to grandchild 
//to avoid disadvantage of propdrilling 