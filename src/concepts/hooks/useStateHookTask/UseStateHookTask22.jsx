import { useState } from "react"
import cherry from "../../../assets/cherryblossom.jpg"


const UseStateHookTask22 =()=>{
    const[userData,setUserData]=useState({
        username:"rojalin",
        age:21,
        email:"roja@gmail.com",
        phone:123456789,
        gender:"female",
        loc:"bbsr",
        b_group:"B+"
    })
    const{username,age,email,phone,gender,loc,b_group}=userData

    const changeName=()=>{
        const newval=prompt("Enter your name:")
        setUserData({...userData, username:newval})
    }

    return(
        <div className="mainbox">
                    <div className="card">
        
                        <img src={cherry} alt=""/>
        
                    <div className="textArea">
                        <h1>{username}</h1>
                        <p>Address:{address}</p>
                        <p>Age:{age}</p>
                        <p>Contact:{contact}</p>
                        <p>Education:{edu}</p>
        
        
                    </div>
        
        
                </div>
                </div>

    )
}
export default UseStateHookTask22