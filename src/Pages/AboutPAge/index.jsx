import React, {useState} from "react";
import Cards from "../../Components/Cards";
import Carousel from "../../Components/Carousel";
import ChooseUs from "../../Components/ChooseUs";
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";


const AboutPage = () => {

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
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  const ScrollBtn = {
    background: "#25356e",
    color: "white",
    position: "absolute",
    right: "20px",
    bottom: "40px",
    border: "1px solid #179ede",
    width: '40px',
    height: '50px'
  };

  const AboutPage = {
    position: "relative",
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div style={AboutPage}>
        <Carousel />   
        <Cards /> 
        <ChooseUs />
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

export default AboutPage;
