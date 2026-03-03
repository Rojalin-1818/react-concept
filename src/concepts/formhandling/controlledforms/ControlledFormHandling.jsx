import React, { useState } from 'react'

const ControlledFormHandling = () => {
    const [formData,setformData]=useState({
        username:"",
        email:"",
        password:"",
        phoneno:""
    })
    const handleInput=(e)=>{
        const {name,value}=e.target
        setformData({...formData,[name]:value})
    }
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="text" placeholder='username' name="username" onChange={handleInput} />
            <input type="email" placeholder='email' name="email" onChange={handleInput} />
            <input type="password" placeholder='password' name="password" onChange={handleInput} />
            <input type="number" placeholder='phoneno' name="phoneno" onChange={handleInput} />
            <br />
            <button>submit</button>
        </form>
        <h1>{formData.username}</h1>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
        <h1>{formData.phoneno}</h1>
    </div>

  )
}

export default ControlledFormHandling
//one input field with useRef =uncontrolled form handling
//controlling an entire form or multiple input fields with one useState or multiple useState =controlled form handling
//is this the place