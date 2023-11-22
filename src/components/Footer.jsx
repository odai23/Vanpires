import React from "react";
import "./Footer.css";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_info">
        <img src="/images/main_logo.png" />
      </div>
      <div className="account_info">
        <h2>Contact Info:</h2>
        <div className="contact_parag">
          <p className="phone_number">+420 737 655 433</p>
          <p>Vanpires</p>
          <p>Location : Praha 8</p>
          <p>IČO : 09177949 </p>
        </div>
      </div>
      <div className="account_info">
        <h2>Opening Hours</h2>
        <p>Mon - Fri</p>
        <p>8am - 6pm</p>
        <p>Sat-Sun</p>
        <p>10am - 4pm </p>
      </div>
      <div className="social_media">
        <h2>Follow Us</h2>
        <div className="icons">
          <a href="https://www.facebook.com/thevanpires">
            <div className="social_icon_fa">
              <FaFacebookF className="inside_icon" />
            </div>
          </a>
          <a href="facebook">
            <div className="social_icon_in">
              <RiInstagramLine className="inside_icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
