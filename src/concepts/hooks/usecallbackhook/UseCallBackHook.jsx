import React, { useState } from 'react'

const UseCallBackHook = () => {
    const [count,setCount]=useState(0)
  return (
    <div>UseCallBackHook
        <p className=''>{count}</p>
    </div>
  )
}

export default UseCallBackHook