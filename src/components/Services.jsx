import React from "react";
import Card from "./Card";
import "./Services.css";
import { FaPhoneAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="pricing">
      <h1 className="services_text">Pricing</h1>
      <div className="container">
        <Card
          true="true"
          title="Basic"
          icon="../../public/images/van_1.png"
          price="1000 czk"
          helper="1 helper"
        />
        <Card
          true="true"
          isPopular="true"
          title="Popular"
          icon="../../public/images/van_2.png"
          price="1400 czk"
          helper="2 helpers"
        />
        <Card
          true="true"
          title="Advanced"
          icon="../../public/images/van_3.png"
          price="1800 czk"
          helper="3 helpers"
        />
      </div>
      <h1 className="services_text">Services : Moving houses and clearance</h1>
      <div className="container">
        <Card
          boxes="Boxes and bubble wrap on request"
          title="House Clearance"
          icon="../../public/images/house_clearance.png"
          price="Contact us for prices information"
          phone={<FaPhoneAlt />}
        />
        <Card
          boxes="Boxes and bubble wrap on request"
          title="Relocation services"
          icon="../../public/images/relocation_services.jpg"
          price="Contact us for prices information"
          phone={<FaPhoneAlt />}
        />
        <Card
          boxes="Boxes and bubble wrap on request"
          title="Furniture Disposal"
          icon="../../public/images/Furniture_Disposal.png"
          price="Contact us for prices information"
          phone={<FaPhoneAlt />}
        />
      </div>
    </div>
  );
};

export default Services;
