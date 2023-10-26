import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Jimzon</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I'm a skill web developer and UI/UX designer
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" />
            Hire Me
          </button>{" "}
        </Link>
      </div>
      <img scr={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
