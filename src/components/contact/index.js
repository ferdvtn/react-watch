import React from "react";
import { iGithub, iTelegram, iWhatsapp, iYoutube } from "../../assets";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" data-aos="fade-right" data-aos-delay="1300">
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <img className="shadow" src={iGithub} alt="youtube-icon" />
      </a>
      <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
        <img className="shadow" src={iWhatsapp} alt="youtube-icon" />
      </a>
      <a href="https://telegram.com" target="_blank" rel="noreferrer">
        <img className="shadow" src={iTelegram} alt="youtube-icon" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <img className="shadow" src={iYoutube} alt="youtube-icon" />
      </a>
      {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
};

export default Contact;
