import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BlogSlider = () => {
  const [showNavbar, setShowNavBar] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const ToggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const ToggleShow = () => {
    setShowNavBar(!showNavbar);
  };

  const Rotate = {
    transform: "rotate(270deg)",
    color: "white",
  };

  const Absolute = {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: "1000",
  };
  return (
    <div className="slider">
      <section>
        <a href="/">
          <img src={Logo} alt="Logo.png" style={Absolute} />
        </a>
        <div className="SliderContainer">
          <h1 data-aos="fade-up">HOW TO START A CAREER IN THE <br /> CRYPTO SPACE</h1>
        </div>
      </section>
      <section id="showBar">
        <div id="toggle" onClick={ToggleShow}>
          <SignalCellularAltIcon style={Rotate} />
        </div>
        <nav className={`navBar ${showNavbar && "active"}`}>
          <ul>
            <li data-aos="fade-up">
              <Link to="/about" className="navLink" data-aos="fade-up">
                About Us
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link to="/blog" className="navLink" data-aos="fade-up">
                Blogs
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link to="/contact" className="navLink" data-aos="fade-up">
                Contact Me
              </Link>
            </li>
            <div className="dropDown" data-aos="fade-up">
              <button className="dropDownBtn" onClick={ToggleDropDown}>
                Crypto Wagons <ExpandMoreIcon />
              </button>
              <label className={`dropDownBox ${showDropDown && "active"}`}>
                <Link to="" className="dropDownLink">
                  Cryptocurrency
                </Link>
                <Link to="" className="dropDownLink">
                  Business
                </Link>
                <Link to="" className="dropDownLink">
                  Branding
                </Link>
                <Link to="" className="dropDownLink">
                  SEO
                </Link>
              </label>
            </div>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default BlogSlider;
