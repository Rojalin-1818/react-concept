import { useState } from "react"
import cherry from "../../../assets/cherryblossom.jpg"

const UseStateTask2 =()=>{
    const[name,updateName]=useState("   ")
    const[address,updateAddress]=useState()
    const[age,updateAge]=useState()
    const[contact,updateContact]=useState()
    const[edu,updateEdu]=useState()
    
    const changeName=()=>{
        let val=prompt("enter your name")
        updateName(val)
    }
    const changeAge=()=>{
        let val=prompt("enter your age")
        updateAge(val)
    }
    const changeAddress=()=>{
        let val=prompt("enter your address")
        updateAddress(val)
    }
    const changeContact=()=>{
        let val=prompt("enter your contact")
        updateContact(val)
    }
    const changeEdu=()=>{
        let val=prompt("enter your educational details")
        updateEdu(val)
    }

    // console.log(name)
    
    
    return(

        <div className="mainbox">
            <div className="card">

                <img src={cherry} alt=""/>

            <div className="textArea">
                <h1>Name:{name}</h1>
                <p>Address:{address}</p>
                <p>Age:{age}</p>
                <p>Contact:{contact}</p>
                <p>Education:{edu}</p>


            </div>


        </div>
        
        <div className="box">
            <button onClick={changeName} id="btn1"> Name:</button>
            <button onClick={changeAddress} id="btn2"> Address:</button>
            <button onClick={changeAge} id="btn3">Age:</button>
            <button onClick={changeContact} id="btn4">contact:</button>
            <button onClick={changeEdu} id="btn5">Education:</button>
        </div>
        </div>
    )
}
export default UseStateTask2