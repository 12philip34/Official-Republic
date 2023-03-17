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
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner carouselBox">
                        <div className="carousel-item active carouselItem">
                            <div className="middleText">
                                <h1>We do everything fashion</h1>
                                <h1>and wears</h1>
                                <p>choose-sew-Deliver</p>
                            </div>
                            <span className="circle"></span>
                        </div>
                        <div className="carousel-item">
                            <div className="middleText">
                                <h1>Get access to fabrics for</h1>
                                <h1>multi-purpose use</h1>
                                <p>All at first hand</p>
                            </div>
                            <span className="circle"></span>c
                        </div>
                        <div className="carousel-item">
                            <div className="middleText">
                                <h1>We style according to </h1>
                                <h1>your way</h1>
                                <p>Your taste in a dress</p>
                            </div>
                            <span className="circle"></span>
                        </div>
                        <div className="carousel-item">
                            <div className="middleText">
                                <h1>Name any fabric, we have it </h1>
                                <h1>in stock</h1>
                                <p>Best qualities in stock</p>
                            </div>
                            <span className="circle"></span>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
      </section>
      <section id="showBar">
        <div id="toggle" onClick={ToggleShow}>
          <SignalCellularAltIcon style={Rotate} />
        </div>
        <nav className={`navBar ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/about" className="navLink" data-aos="fade-up">
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="navLink" data-aos="fade-up">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="" className="navLink" data-aos="fade-up">
                Contact Me
              </Link>
            </li>
            <div className="dropDown">
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
