
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Navbar from "./Navbar"
import Project from "./Project"

const Portfolio=()=>{
    return(
        <div>
            
            <Home/>
            <div class="skills-divider">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Java</span>
            <span>React</span>
            <span>Git</span>
            <span>Github</span>
            </div>

            <About/>
            <div class="skills-divider">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Java</span>
            <span>React</span>
            <span>Git</span>
            <span>Github</span>
            </div>
            <Project/>
            <Contact/>

            
        </div>
    )
}
export default Portfolio