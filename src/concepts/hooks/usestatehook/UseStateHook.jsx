import React, { useState } from 'react'

const UseStateHook =()=>{
    const [count,setCount]=useState(0)
    const updateValue=()=>{
        setCount(count+1)

    }
    const sub=()=>{
        setCount(count-1)
    }

    const reset=()=>{
        setCount(0)
    }
    console.log("hello")
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={updateValue}>+1</button>
            <button onClick={sub}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default UseStateHook 
















// // whenever if usestatehook is called it return an array consisting of two values
// //first value is undefined second one is function
// while calling usedState function we need to pass a data known as initial value we can pass data of all datatypes as initial valueinitial value will be directly stored in the first value to update the initial value 2nd value is used and then updated in the first initial value
//loading: first time a content is loading in the browser
//rendering: already the content is loaded and the content updated without the server reloading
//re-rendering: if updates happen in sequence and the rendered content is updating its content again and agian its known as rerendering
//reload : explicitly the whole webpage refreshes and will render the initial value and will lose the updated values
