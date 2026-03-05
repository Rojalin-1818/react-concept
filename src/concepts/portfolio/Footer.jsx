import { FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer=()=>{
    return(
        <div className="footer">
            <h1>Rojalin</h1>
           
            <div className="icons1">
                <div className="insta"><FaInstagram/></div>
                <div className="in"><LiaLinkedinIn /></div>
                <div className="globe"><FaGlobe /></div>
                <div className="hub"><FaGithub /></div>
                </div>

                <p>Copyright © John Doe - All rights reserved</p>
            
                
                                 
        </div>
    )
}
export default Footer