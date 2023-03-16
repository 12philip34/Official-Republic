import React from "react";
import Cards from "../../Components/Cards";
import Carousel from "../../Components/Carousel";
import ChooseUs from "../../Components/ChooseUs";
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";

const AboutPage = () => {
  return (
    <div>
        <Carousel />   
        <Cards /> 
        <ChooseUs />
        <Team />
        <Footer />
    </div>
  );
};

export default AboutPage;
