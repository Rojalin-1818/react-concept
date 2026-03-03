import React, { useState } from 'react'

const ControlledformHandling1 = () => {
    const [formData,setformData]=useState(
        {
            username:""
        }
    )

    const[errors,setErrors]=useState(null)

    const handleInput=(e)=>{
        const{name,value}=e.target 
        setErrors(null)
        setformData({...formData,[name]:value})
    }

   const handleForm=(e)=>{
        e.preventDefault()
        console.log(formData)

        if(!formData.username){
        setErrors(true)
    }
    setformData({
        username:""
    })
    }
    
  return (
    <div>
            <form onSubmit={handleForm}>
            <input type="text" placeholder='username' name="username" onChange={handleInput} value={formData.username} />
            {
                errors?<p style={{color:"red"}}>username is required <sup>*</sup></p>:""
            }
            <button>submit</button>
            </form>
            <hr />
            <h1>{formData.username}</h1>
    </div>
  )
}

export default ControlledformHandling1