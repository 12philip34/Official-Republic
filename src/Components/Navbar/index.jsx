import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Typed from "react-typed";

const Navbar = () => {
  const [showNavbar, setShowNavBar] = useState(false);

  const ToggleShow = () => {
    setShowNavBar(!showNavbar);
  };

  const Rotate = {
    transform: "rotate(270deg)",
    color: "white",
  };

  return (
    <div className="navContainer">
      <section className="logoBox">
        <a href="/">
          <img src={Logo} alt="logo.png" data-aos="fade-up" />
          </a>
        <label>
          <h3 data-aos="fade-up">YOUR NO. 1 CRYPTO MARKETING AGENCY</h3>
          <h1 data-aos="fade-up">
            <Typed
              strings={[
                "Welcome to UncleSam's Republic",
                "Your DeFi & NFT marketing agency.",
                "We give you exposure without ads.",
              ]}
              typeSpeed={150}
              backSpeed={90}
              loop
            />
          </h1>
            <p data-aos="fade-up">
              We offer the best crypto community management, community
              moderation, community engagement, content creation, social media
              management etc.
            </p>
            <a href="#hello" data-aos="fade-up">Let's Build</a>
        </label>
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
              <Link to="/blog" className="navLink" data-aos="fade-up">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navLink" data-aos="fade-up">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
