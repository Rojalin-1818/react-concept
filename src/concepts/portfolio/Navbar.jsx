import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";

const Navbar = ({ direction = "row" }) => {
  const [active, setActive] = useState("Home");

  return (
    <div className={`navbar ${direction === "column" ? "about" : ""}`}>
      <h1>
        <PiStarFourFill size={26} fill="#6a5acd" />
        Rojalin
      </h1>

      <div>
        <div className={`list ${direction === "column" ? "about" : ""}`}>

          <div
            className={`navdiv ${active === "Home" ? "active" : ""}`}
            onClick={() => setActive("Home")}
          >
            <a href="#home">Home</a>
          </div>

          <div
            className={`navdiv ${active === "About" ? "active" : ""}`}
            onClick={() => setActive("About")}
          >
           <a href="#about">About</a>
          </div>

          <div
            className={`navdiv ${active === "Project" ? "active" : ""}`}
            onClick={() => setActive("Project")}
          >
            <a href="#project">Project</a>
          </div>

          <div
            className={`navdiv ${active === "Contact" ? "active" : ""}`}
            onClick={() => setActive("Contact")}
          >
            <a href="#contact">Contact</a>
          </div>

        </div>
      </div>

      <button>Download CV</button>
    </div>
  );
};

export default Navbar;