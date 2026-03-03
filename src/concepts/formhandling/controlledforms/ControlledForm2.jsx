import React, { useState } from 'react'

const ControlledForm2 = () => {
    const[formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        course:""
    })
    const {username,email,password,course}=formData
    const handleInput=(e)=>{
        const{name,value}=e.target 
        setFormData({...formData,[name]:value})
        
    }
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(formData)
        setFormData({
        username:"",
        email:"",
        password:"",
        course:""
        })

    }
    

  return (
    <div>
        <form onSubmit={handleForm}>
            <div>
                <input type="text" placeholder='your name' name='username' value={username} onChange={handleInput} />
            </div>
            <div>
                <input type="email" placeholder='your email' name='email' value={email} onChange={handleInput} />
            </div>

            <div>
                <input type="password" placeholder='your password' name='password' value={password} onChange={handleInput} />
            </div>
            <select name="course" id="" value={course} onChange={handleInput}>
                <option value=""></option>                         
                <option value="B.Tech">B.Tech</option>
                <option value="Bsc">Bsc</option>
                <option value="MCA">MCA</option>
                <option value="M.Tech">M.Tech</option>
            </select>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default ControlledForm2


//selected={!course?true:false}
//useEffect is a hook in react js which is used to avoid the side effect of reactjs such as infinite re-rendering of an component when state is updating.
//note- useEffect hook will not return any data 
//useEffect will accept two arguments first argument is Callback function and second is dependency
//useEffect(()=>{},[])
// useEffect=
// without dependency     useEffect(()=>{})
// empty dependency       useEffect(()=>{},[])              only 1 time(first loading)
// with dependency        useEffect(()=>{},[val1 , val2 , .....])          //if the dependency value changes / updates it execute