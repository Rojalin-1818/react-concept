import Navbar from "./Navbar"
import profile from "../../assets/profile.png"  


const About=()=>{
    return(
        <div className="Aboutcontainer">
            <div className="aboutnav">
                
                    <div className="aboutdiv"><h1>About</h1></div>

                    
                
                
            <div className="imgbackground2">
                <img src={profile} alt="" className="aboutimg"/>
                </div>
            
            </div>

            <div className="about-content">
                <div className="vertical-line"></div>
                

        <div className="Righttext">
            
            <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge frameworks and libraries,which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress.</p>

            <div className="skills">
                <div className="frontend">
                <h3>Frontend</h3>
                
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    </ul>
            </div>
            <div className="skill-line"></div>
            <div className="backend">
                <h3>Backend</h3>
                <ul>
                    <li>Java</li>
                </ul>
                
            </div>
            <div className="skill-line"></div>
            <div className="database">
                <h3>Database</h3>
                <ul>
                    <li>My Sql</li>
                    <li>Oracle</li>
                </ul>
            </div>
            </div>

        </div>
         </div>
           

        </div>
    )
}
export default About