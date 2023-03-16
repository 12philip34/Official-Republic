import React from "react";
import Navbar from "../../Components/Navbar";
import WhatWeDo from "../../Components/WhatWeDo";
import WhoWeAre from "../../Components/WhoWeAre";
import HowWeCanHelp from '../../Components/HowCanWeHelp'
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";
// import HomeStyle from "./home.module.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeCanHelp />
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
