import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings, typeSpeed = 50, backSpeed = 30 }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: true,
    });

    return () => {
      typed.destroy(); 
    };
  }, [strings, typeSpeed, backSpeed]);

  return <span ref={el} className="gradient-text"></span>;
};

export default TypedText;