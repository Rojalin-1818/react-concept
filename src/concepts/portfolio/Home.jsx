import profile from "../../assets/profile.png"  
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SlMouse } from "react-icons/sl";
import Navbar from "./Navbar";
import TypedText from "./TypedText";
import { GoArrowRight } from "react-icons/go";
import idea from "../../assets/idea.webp"
import projects from "../../assets/project1.png"
// import team from "../../assets/team.png"
import team from "../../assets/teams.png"
import productivity from "../../assets/productivity.png"
import myimage from "../../assets/picture1.png"

const Home=(()=>{
    return(
        <div className="homecontainer" id="home">
           

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
                    <div>
                        <img src={productivity} alt="" className="icon4"/>
                    </div>
                    <div>
                        <img src={team} alt="" className="icon1"/>
                    </div>
                     <div>
                        <img src={projects} alt="" className="icon2"/>
                    </div>
                    <div className="imgbackground"></div>
                <img src={myimage} alt="" className="myimage"/>
                </div>
                <div>
                        <img src={idea} alt="" className="icon3"/>
                    </div>
            
            
        </div>
    )
})
export default Home