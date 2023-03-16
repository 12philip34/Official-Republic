import React, { useState } from "react";
import "./style.css";
import Caro1 from "../../Images/car01.jpg";
import Caro2 from "../../Images/caro2.jpg";
import Caro3 from "../../Images/car03.jpg";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// import Caro4 from '../../Images/Caro4.jpg'
// import Caro5 from '../../Images/gold.jpg'

const Carousel = () => {
  const [showNavbar, setShowNavBar] = useState(false);

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
      <section className="carouselBox">
        <a href="/"><img src={Logo} alt="" style={Absolute} /></a>
        <span className="slideText">
          <label>
            <h1 data-aos="fade-up">Welcome to your No. 1 <br /> Crypto Agency</h1>
            <p data-aos="fade-up">We are a creative CRYPTO MARKETING AGENCY</p>
          </label>
        </span>
       <span className="slideAnimation">
       <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Caro1} className="d-block widthCarousel" alt="carousel.png" />
            </div>
            <div class="carousel-item">
              <img src={Caro2} className="d-block widthCarousel" alt="carousel.png" />
            </div>
            <div class="carousel-item">
              <img src={Caro3} className="d-block widthCarousel" alt="carousel.png" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
       </span>
      </section>
      <section id="showBar">
        <div id="toggle" onClick={ToggleShow}>
          <SignalCellularAltIcon style={Rotate} />
        </div>
        <nav className={`navBar ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/about" className="navLink" data-aos="fade-up">
                About Me
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
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Carousel;
