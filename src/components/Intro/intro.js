import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <p className="introText">You are now entering in my domain</p>
        <span className="introName">
          I am Grand <span>Dexter Echalico...</span>
        </span>
        <h1 className="introMain">Welcome to my World</h1>
      </div>
      <div>
        <Link>
          <button className="btn">Portfolio</button>
        </Link>
        <Link>
          <button className="btn">Contact Me</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
