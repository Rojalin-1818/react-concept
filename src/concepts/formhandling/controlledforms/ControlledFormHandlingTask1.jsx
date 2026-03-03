import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import image from "../../../assets/flyingghost.png"
import { useRef, useState } from "react";
import { toast } from "react-toastify";
const ControlledFormHandlingTask1 =()=>{
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username:"",
        email: "",
        password: "",
        confirmpassword: ""
        
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const formHandle=(e)=>{
        e.preventDefault()
        const { firstname, lastname, username,email, password, confirmpassword } = formData

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
        if(!email)
        {
            toast.error("email is required")
        }
        if(!password)
        {
            toast.error("password is required")
        }
        if(!confirmpassword)
        {
            toast.error("password confirmation is required")
            return
        }
        
        
            const data={
        firstname,lastname,username,email,password,confirmpassword
    };
    localStorage.setItem("details",JSON.stringify(data))
    toast.success("registration successfull !!")
    setFormData({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            
    });


        };
    

    
    


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
                    <CgProfile className="input-icon"/><input type="text" placeholder="FirstName" className="input" name="firstname" onChange={handleInput}/>
                    <CgProfile className="input-icon"/><input type="text" placeholder="LastName" className="input" name="lastname" onChange={handleInput}/>
                    <IoPersonCircleOutline className="input-icon"/><input type="text" placeholder="UserName" className="input" name="username" onChange={handleInput}/>
                    <MdEmail className="input-icon" /><input type="email" placeholder="Email" className="input" name="email" onChange={handleInput}/>
                    <RiLockPasswordFill className="input-icon"/><input type="password" placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character"className="input" name="password" onChange={handleInput}/>
                    <RiLockPasswordFill className="input-icon"/><input type="password" placeholder="ConfirmPassword" className="input" name="confirmpassword" onChange={handleInput}/>
                    <div className="accept">
                        <label htmlFor="agreement">
                        <input type="checkbox" id="agreement"  required/> I accept the Terms of Use and Privacy Policy
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
export default ControlledFormHandlingTask1