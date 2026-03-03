import { PiBagFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { IoRibbonSharp } from "react-icons/io5";



const Project=()=>{
    return(
        <div className="projcontainer">
            <div className="project"><h1>Projects</h1>
            <div className="displaybox">
                <div className="firstbox">
                    <><PiBagFill size={30}/></>
                    <h3>Completed</h3>
                    <p>15+ Finished Projects</p>
                </div>
                <div className="secondbox">
                    <><BsPeopleFill size={30}/></>
                    <h3>Clients</h3>
                    <p>25+ happy clients</p>
                </div>
                <div className="thirdbox">
                    <><IoRibbonSharp size={30}/></>
                    <h3>Experience</h3>
                    <p>7+ years in the field</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Project;