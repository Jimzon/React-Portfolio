import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_moubnwk",
        "template_m98x6mq",
        form.current,
        "9iw1xvnw7z9EKU34KYt5D"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            className="name"
            type="text"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            className="email"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
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
            <img className="link" src={FacebookIcon} alt="Facebook" />
            <img className="link" src={TwitterIcon} alt="Twitter" />
            <img className="link" src={YouTubeIcon} alt="YouTube" />
            <img className="link" src={InstagramIcon} alt="Instagram" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
