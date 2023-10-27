import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I specialize in web design, crafting beautiful and user-friendly
        websites, while also diving into programming to bring them to life
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={UIDesign} alt="" />
          <div className="skillBarText">
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={WebDesign} alt="" />
          <div className="skillBarText">
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={AppDesign} alt="" />
          <div className="skillBarText">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
