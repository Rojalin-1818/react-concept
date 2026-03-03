import { useRef } from "react"
import { BsGenderAmbiguous } from "react-icons/bs"
import { toast } from "react-toastify"

const UncontrolledFormHandling=()=>{
    const usernameRef=useRef(null)
    const userpasswordRef=useRef(null)
    const maleRef=useRef(null)
    const femaleRef=useRef(null)
    const othersRef=useRef(null)
    const handleForm=(e)=>{
        e.preventDefault()
        const username=usernameRef.current.value
        const password=userpasswordRef.current.value
        const gender= (maleRef.current.checked)?"male":(femaleRef.current.checked)?"female":(othersRef.current.checked)?"others":null

        
        // console.log(e)
        // console.log("form submitted")
        if(!username){
            usernameRef.current.style.outline="2px solid red"
            toast.error("username is required",{position:"top-center"})
            setTimeout(()=>{
                usernameRef.current.style.outline=""
            },2000)
            return
        }
        if(!password){
            toast.error("Password is required", {position:"top-center"})
            return      
        }
        else{
             const data={
                username,
                password,
                gender
            }
            localStorage.setItem("details",JSON.stringify(data))
            toast.success("registration successful",{position:"top-center"})
            usernameRef.current.value=""
            userpasswordRef.current.value=""
            maleRef.current.checked=false
            femaleRef.current.checked=false
            othersRef.current.checked=false
        }

           
    }
    return(
        <>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="enter your name" ref={usernameRef}/><br /><br />
                <input type="password" placeholder="password" ref={userpasswordRef}/>
                <br /><br />

                <label htmlFor="male">
                    <input type="radio" value="male" id="male" name="gender" ref={maleRef} />male
                </label><br />

                <label htmlFor="female">
                    <input type="radio" value="female" id="female" name="gender" ref={femaleRef} />female
                </label><br />

                <label htmlFor="others">
                    <input type="radio" value="others" id="others" name="gender" ref={othersRef} />others
                </label><br /><br />

                <button>Submit</button>
            </form>
        </>
    )
}
export default UncontrolledFormHandling