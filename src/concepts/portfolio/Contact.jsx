import { HiMiniArrowTurnRightDown } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";




const Contact=()=>{
    return(
        <div className="contactcontainer">
            <div className="con"><h1>Get In Touch</h1> <p>Do you have a project in your mind, contact me here</p></div>
            <div className="displaycontact">
                <div className="contactbox">
                    <h2>find me <HiMiniArrowTurnRightDown /></h2>
                    <p><MdEmail />Email:roja@gmail.com</p>
                    <p><BsFillTelephoneFill /> Tel: +1234567890</p>
                </div>
                
                <div className="formarea">
                    <div className="formbox">
                <div className="form">
                   <div className="firstform"><input type="text" placeholder="Name" name="name" id="text"/>
                   <input type="email" placeholder="email" name="email" id="email"/>
                   </div>

                   <textarea name="message" id="message" placeholder="message"></textarea>

                   
                   

                </div>
                
                </div>
                <div className="sendbtn"><button className="send">send<IoIosSend /></button></div>
                </div>
                
                
            </div>
        </div>
    )
}
export default Contact