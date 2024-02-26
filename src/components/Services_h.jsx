import React from "react";
import Card from "./Card";
import "./Services.css";
import { FaPhoneAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="pricing">
      <h1 className="services_text">Extra Services</h1>
      <div className="container">
        <Card title="Coming soon" />
        <Card
          boxes="Fixing your house and garden"
          title="Handy-man services"
          icon="/images/relocation_services.jpg"
          price="Contact us for prices information"
          phone={<FaPhoneAlt />}
        />
        <Card title="Coming soon" />
      </div>
    </div>
  );
};

export default Services;
