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
        <img src={Logo} alt="logo.png" />
        <label>
          <h3>YOUR NO. 1 CRYPTO MARKETING AGENCY</h3>
          <h1>
            <Typed
              strings={[
                "WE'RE YOUR PROJECT'S CHAPERONE",
                "A CREATIVE CRYPTO MARKETING AGENCY",
                "We take your brand to the next level",
              ]}
              typeSpeed={150}
              backSpeed={90}
              loop
            />
          </h1>
            <p>
              We offer the best crypto community management, community
              moderation, community engagement, content creation, social media
              management etc.
            </p>
            <a href="">Get Started</a>
        </label>
      </section>
      <section id="showBar">
        <div id="toggle" onClick={ToggleShow}>
          <SignalCellularAltIcon style={Rotate} />
        </div>
        <nav className={`navBar ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="" className="navLink">
                About Me
              </Link>
            </li>
            <li>
              <Link to="" className="navLink">
                Some Designs
              </Link>
            </li>
            <li>
              <Link to="" className="navLink">
                You Ready!
              </Link>
            </li>
            <li>
              <Link to="" className="navLink">
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
