import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Services from "./components/Services";
import AboutUs from "./components/About_us";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutUs />
      <Services />
      <Form />
      <Footer />
    </>
  );
}

export default App;
