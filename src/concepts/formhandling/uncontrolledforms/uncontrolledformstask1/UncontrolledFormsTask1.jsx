import { useRef } from "react"
import { toast,Bounce,Zoom } from "react-toastify"
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";



const UncontrolledFormTask1=()=>{
const username =useRef(null)
const password=useRef(null)
const formHandle =(e)=>{
    e.preventDefault()
    const name=(username.current.value)
    const pass=(password.current.value)
    console.log(name)
    console.log(pass)
    if(!name || !pass){
        toast.error("All fields are required ☹️",{position:"top-center", transition:Zoom,})
    }
    else{
        toast.success("logged in sucessfully !!😍",{position:"top-center",transition:Bounce})
    }
}

    return(
        <div className="displayform">
            <div className="div1">
                <h1>Login</h1>
                <p>How to get started lorem ipsum dolor at?</p>
                <form onSubmit={formHandle}>
                    <div className="inputbox">
                        <IoPersonSharp size={18} color="gray" className="input-icon"/>
                         <input type="text" placeholder="username"ref={username}/>
                    </div>
                    <div className="passwordbox">
                        <RiLockPasswordFill className="lock-icon"/>
                        <input type="password" placeholder="password" ref={password}/>

                    </div>
                
                <button className="login" type="submit">Login Now</button>
                </form>

                
                <button className="google"><FcGoogle size={30}/>Login with google</button>
                <button className="fb"><ImFacebook2 size={25} color="blue"/>Login with Facebook</button>
            </div>

            <div className="div2">
               <div className="indiv">
                <img src="https://images.stockcake.com/public/6/a/e/6ae45611-f0ab-42f6-ab55-c7961defbfc6_large/cherry-blossom-close-up-stockcake.jpg" alt="" />
               </div>
            </div>
            
        </div>
    )
}
export default UncontrolledFormTask1