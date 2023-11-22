import React from "react";
import "./About_us.css";

const AboutUs = () => {
  return (
    <div id="about" className="about_sec">
      <h1 className="about_heading">Why Us?</h1>
      <p className="about_text_above">
        Vanpires specializes in seamless and efficient moving services, ensuring
        that your belongings are handled with care from start to finish. Whether
        you're moving within the Czech Republic or crossing international
        borders, Vanpires has the expertise to make the process smooth and
        stress-free.
      </p>
      <div className="second_text">
        <img className="about_img" src="/images/aboutUs.jpg" />
        <p className="about_text_right">
          Our team's friendly attitude extends to our moving services, where
          clients can trust in the professionalism and care with which their
          possessions are handled.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
