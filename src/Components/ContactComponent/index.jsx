import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../Images/Logo.png";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const ContactComponent = () => {
  const [showNavbar, setShowNavBar] = useState(false);

  const ToggleShow = () => {
    setShowNavBar(!showNavbar);
  };

  const Rotate = {
    transform: "rotate(270deg)",
    color: "white",
    zIndex: '1000'
  };

  return (
    <div>
      <div className="navContainer">
        <section className="contactContent">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <span>
            <h1 data-aos="fade-up">Contact for Crypto Services</h1>
            <p data-aos="fade-up">
              We offer the best crypto community moderation, community
              engagement, <br /> community management, content creation, social
              media management etc.
            </p>
          </span>
        </section>
        <section id="showBar">
          <div id="toggle" onClick={ToggleShow}>
            <SignalCellularAltIcon style={Rotate} className="zIndex" />
          </div>
          <nav className={`navBar ${showNavbar && "active"}`}>
            <ul data-aos="fade-up">
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
      <div className="contactInput">
        <section className="formBox">
          <span className="form">
            <form
              action="https://getform.io/f/35e640fb-7f2f-4882-9567-2777bfc7e878"
              method="POST"
            >
              <span>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </span>
              <span>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </span>
              <span>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </span>
              <button type="submit">Lets Build</button>
            </form>
          </span>
          <span className="LogoAndSideForm">
            <img src={Logo} alt="logo.png" />
          </span>
        </section>
      </div>
    </div>
  );
};

export default ContactComponent;
