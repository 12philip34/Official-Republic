import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import WhatWeDo from "../../Components/WhatWeDo";
import WhoWeAre from "../../Components/WhoWeAre";
import HowWeCanHelp from '../../Components/HowCanWeHelp'
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const HomePage = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const ScrollBtn ={
    background: '#25356e',
    color: 'white',
    position: 'absolute',
    right: '20px',
    bottom: '40px',
    border: '1px solid #179ede',
    width: '40px',
    height: '50px'
  }

  const Homepage = {
    position: 'relative'
  }

  window.addEventListener("scroll", toggleVisible);
  return (
    <div style={Homepage}>
      <Navbar />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeCanHelp />
      <Team />
      <Footer />
      <button style={ScrollBtn}>
        <KeyboardDoubleArrowUpIcon
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </button>
    </div>
  );
};

export default HomePage;
