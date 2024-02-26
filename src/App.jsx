import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Services_h from "./components/Services_h";
import AboutUs from "./components/About_us";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutUs />
      <Services />
      <Services_h/>
      <Reviews />
      <Form />
      <Footer />
    </>
  );
}

export default App;
