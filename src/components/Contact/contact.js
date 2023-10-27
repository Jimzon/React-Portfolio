import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/twitter.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have served some of the best companies. Some of the notable
          companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img className="clientImg" src={Walmart} alt="Client" />
          <img className="clientImg" src={Adobe} alt="Client" />
          <img className="clientImg" src={Microsoft} alt="Client" />
          <img className="clientImg" src={Facebook} alt="Client" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDec">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input className="name" type="text" placeholder="Your Name" />
          <input className="email" type="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img className="link" src="" alt="" />
            <img className="link" src="" alt="" />
            <img className="link" src="" alt="" />
            <img className="link" src="" alt="" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
