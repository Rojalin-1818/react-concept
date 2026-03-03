import { useState } from "react"

const UseStateCase1 =()=>{
    const[count,setCount]=useState(0)
    // setCount(count+1)

    console.log(count)


    return(
        <div>
            <h1>{count}</h1>
        <button onClick={()=>{useState(count+1)}}>click</button>
        </div>
    )
}
export default UseStateCase1