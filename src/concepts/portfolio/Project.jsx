import { useState } from "react";
import video from "../../assets/thirdsection.mp4";
import swiggy from "../../assets/swiggyclone.png";
import song from "../../assets/songplaylist.jpeg";
import { GiRocket } from "react-icons/gi";


const Project = () => {
  const [active, setActive] = useState(null);
  const [drop, setDrop] = useState(false);

  const handleClick = (index) => {
    if (active === index) {
  setActive(null);
  return;
}
    setDrop(false);

    setTimeout(() => {
      setActive(index);
      setDrop(true);
    }, 100);
    
  };

  return (
    <div className="projcontainer" id="project">

      {/* ICON */}
      {active !== null && (
        <div className={`icon-wrapper pos-${active}`}>
          <div className={`icon ${drop ? "drop" : ""}`}><GiRocket />
</div>
          <div className="shadow"></div>
        </div>
      )}

      {/* CARDS */}
      <div className="projects-container">

        <div
          className={`card ${active === 0 ? "active glow" : ""}`}
          onClick={() => handleClick(0)}
        >
          <div className="card-inner">
            <div className="card-front">
              <video src={video} autoPlay muted loop playsInline />
            </div>
            <div className="card-back"><h4>Space X</h4>
            <p>Developed a frontend clone of the SpaceX website using ReactJS.</p>
            </div>
          </div>
        </div>

        <div
          className={`card ${active === 1 ? "active glow" : ""}`}
          onClick={() => handleClick(1)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={swiggy} alt="" />
            </div>
            <div className="card-back"><h4>Swiggy Clone</h4>
              <p>Designed and implemented a Swiggy UI clone using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>

        <div
          className={`card ${active === 2 ? "active glow" : ""}`}
          onClick={() => handleClick(2)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={song} alt="" />
            </div>
            <div className="card-back">
              <h4>Music Playlist</h4>
              <p>Developed a ReactJS-based music player with functional playlist controls including shuffle, next, and previous features. 🎵</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;