import profile from "../../assets/profile.png"  
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SlMouse } from "react-icons/sl";
import Navbar from "./Navbar";
import TypedText from "./TypedText";
import { GoArrowRight } from "react-icons/go";


const Home=(()=>{
    return(
        <div className="homecontainer">
            <Navbar/>

            <div className="text">
                <h1 className="intro">Hi, I'm Rojalin</h1>
                
                <h2 className="designation">
                I'm a{" "}
                <TypedText
                strings={[
                    "Frontend Developer",
                    "React Developer",
                    "Creative Designer",
                    ]}
                />
                </h2>

                <p>Crafting modern, responsive, and user-friendly <br /> websites with passion and precision</p>

                <div>
                    <button>Download CV
                        <div className="dc"><GoArrowRight size={25}/>
</div>
                    </button>
                    
                </div>
                 <div className="icons">
                <div className="insta"><FaInstagram/></div>
                <div className="in"><LiaLinkedinIn /></div>
                <div className="globe"><FaGlobe /></div>
                <div className="hub"><FaGithub /></div>
                 </div>

            </div>
           
                <div>
                    <div className="imgbackground"></div>
                <img src={profile} alt=""/>
                </div>
            
            
        </div>
    )
})
export default Home