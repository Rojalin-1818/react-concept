import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
 const[count,setCount]=useState(0)
    const expensiveCalculation=useMemo(()=>{
       
        let sum=0
        for(let i=1;i<=100000000;i++){
            sum+=i;
        }
        return sum
    },[]

    )
    console.log(expensiveCalculation);

  return (
    <div>UseMemoHook
        <h1 >{count}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
    
  )
}

export default UseMemoHook
//useMemo will remember the function value