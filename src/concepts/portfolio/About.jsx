import Navbar from "./Navbar"
import myimage from "../../assets/picture1.png"


const About=()=>{
    return(
        <section className="Aboutcontainer" id="about">
            {/* <Navbar/> */}
            <div className="displaycontainerabout">
                <div className="aboutnav">
                
                    <div className="aboutdiv"><h1>About</h1></div>

                    
                
                
            <div className="imgbackground2">
                <img src={myimage} alt="" className="aboutimg"/>
                </div>
            
            </div>

            <div className="about-content">
                <div className="vertical-line"></div>
                

        <div className="Righttext">
            
            <p>Web developer skilled in HTML, CSS, JavaScript, Java, and React. Experienced in creating responsive, interactive, and high-performance web applications with modern frameworks and libraries. Adept at building dynamic features, optimizing performance, and delivering seamless user experiences across devices.</p>

            <div className="skills">
  <div className="frontend slide-down">
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

  <div className="database slide-down">
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
         </section>
           

       
    )
}
export default About