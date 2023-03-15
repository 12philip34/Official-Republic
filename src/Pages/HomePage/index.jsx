import React from "react";
import WhatWeDo from "../../Components/WhatWeDo";
import WhoWeAre from "../../Components/WhoWeAre";
import HowWeCanHelp from "../../Components/HowWeCanHelp";
// import HomeStyle from "./home.module.css";

const HomePage = () => {
  return (
    <div>
      <WhoWeAre />
      <WhatWeDo />
      <HowWeCanHelp />
    </div>
  );
};

export default HomePage;
