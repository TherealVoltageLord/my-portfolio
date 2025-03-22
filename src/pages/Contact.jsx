import React from "react";
import "../styles/Contact.css";
import { FaWhatsapp, FaTelegram, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out through any of the platforms below:</p>
      <ul>
        <li>
          <FaWhatsapp /> 
          <a href="https://wa.me/2347045675902" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </li>
        <li>
          <FaTelegram />
          <a href="https://t.me/Voltage_lord" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </li>
        <li>
          <FaInstagram />
          <a href="https://www.instagram.com/therealvoltage_lord" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <FaGithub />
          <a href="https://github.com/Thereal_VoltageLord" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <FaEnvelope />
          <a href="mailto:odunayoayinla23@gmail.com">
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
