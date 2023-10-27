import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";

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
      <div id="contact"></div>
    </section>
  );
};

export default Contact;
