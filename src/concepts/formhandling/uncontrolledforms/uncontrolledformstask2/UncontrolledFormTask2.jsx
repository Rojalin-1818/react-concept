import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import image from "../../../../assets/flyingghost.png"
import { useRef } from "react";
import { toast } from "react-toastify";
const UncontrolledFormTask2 =()=>{
    const firstnameRef=useRef(null)
    const lastnameRef=useRef(null)
    const usernameRef=useRef(null)
    const mailRef=useRef(null)
    const passwordRef=useRef(null)
    const confirmpasswordRef=useRef(null)
    const acceptRef=useRef(null)

    const formHandle=((e)=>{
        e.preventDefault()
        const firstname=firstnameRef.current.value
        const lastname=lastnameRef.current.value 
        const username=usernameRef.current.value 
        const mail=mailRef.current.value 
        const password=passwordRef.current.value 
        const confirmpw=confirmpasswordRef.current.value
        const checkbox=acceptRef.current.checked

        if(!firstname){
        toast.error("firstname is requried")
        }
        if(!lastname)
        {
            toast.error("lastname is required")
        }
        if(!username)
        {
            toast.error("username is required")
        }
        if(!mail)
        {
            toast.error("email is required")
        }
        if(!password)
        {
            toast.error("password is required")
        }
        if(!confirmpw)
        {
            toast.error("password confirmation is required")
        }
        
        else{
            const data={
        firstname,lastname,username,mail,password,confirmpw,checkbox
    }
    localStorage.setItem("details",JSON.stringify(data))
    toast.success("registration successfull !!")
    firstnameRef.current.value=""
    lastnameRef.current.value =""
    usernameRef.current.value =""
    mailRef.current.value =""
    passwordRef.current.value =""
    confirmpasswordRef.current.value =""
    acceptRef.current.checked=false


        }
    
    })
    
    


    return(
        <div className="displaycard">
            <div className="div1">
                
                <div>
                <div className="indiv"><img src={image} alt="" /><h1 className="logotext">Romanchat</h1></div>
                </div>
                
                
            
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.  qllat atque vero natus facere nihil harum laborum minus impedit ut in accusamus officiis voluptatum! Atque, fuga.</p>

                <button className="getstarted">get started</button>
                

            </div>

            <div className="div2">
                <div className="heading">
                    <h1>Register</h1>
                <p>create your account it's free and only takes a minute</p>
                </div>
                <form onSubmit={formHandle}>
                    <CgProfile className="input-icon"/><input type="text" placeholder="FirstName" className="input" ref={firstnameRef}/>
                    <CgProfile className="input-icon"/><input type="text" placeholder="LastName" className="input" ref={lastnameRef}/>
                    <IoPersonCircleOutline className="input-icon"/><input type="text" placeholder="UserName" className="input" ref={usernameRef}/>
                    <MdEmail className="input-icon" /><input type="email" placeholder="Email" className="input" ref={mailRef}/>
                    <RiLockPasswordFill className="input-icon"/><input type="password" placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character"className="input" ref={passwordRef}/>
                    <RiLockPasswordFill className="input-icon"/><input type="password" placeholder="ConfirmPassword" className="input" ref={confirmpasswordRef}/>
                    <div className="accept">
                        <label htmlFor="agreement">
                        <input type="checkbox" id="agreement" ref={acceptRef} required/> I accept the Terms of Use and Privacy Policy
                    </label>
                    <div className="sign">
                        <p>Already a member? <a href="">Sign In</a></p>
                        <button type="submit" >SIGN UP</button>
                    </div>
                    </div>
                    </form>
                    
                    <div className="circle">
                        <p><MdOutlineHorizontalRule size={20}/>or sign up with<MdOutlineHorizontalRule size={20}/></p>
                        <div className="circle1"><div className="c1"></div> <div className="c2"></div> <div className="c3"></div></div>
                    </div>



            </div>

        </div>
    )
}
export default UncontrolledFormTask2