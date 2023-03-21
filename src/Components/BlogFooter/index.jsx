import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const BlogFooter = () => {
  return (
    <div>
      <div className={style.blogFooter}>
        <div className={style.topFooter}>
          <span>
            <h2 data-aos="zoom-in">About Us</h2>
            <p data-aos="zoom-in">
              UncleSam’s Republic is a phenomenal crypto marketing agency with a
              flare for building a thriving and loyal crypto community for your
              crypto project(s) through guaranteed marketing strategies. We are
              your project’s Chaperone!
            </p>
          </span>
          <span>
            <h2 data-aos="zoom-in">Quick Links</h2>
            <ul data-aos="zoom-in">
                <li><Link to="/" className={style.footerLink}>Home</Link></li>
                <li><Link to="/about" className={style.footerLink}>About Us</Link></li>
                <li><Link to="/contact" className={style.footerLink}>Contact Us</Link></li>
            </ul>
          </span>
          <span>
          <h2 data-aos="zoom-in">Latest News</h2>
            <ul data-aos="zoom-in">
                <li><Link to="" className={style.footerLink}>Fed to launch instant payment</Link></li>
                <li><Link to="" className={style.footerLink}>Web1 vs Web2 vs Web3. What is the  difference?</Link></li>
                <li><Link to="" className={style.footerLink}>Where are NFTs stored?</Link></li>
            </ul>
          </span>
        </div>
        <div className={style.bottomFooter} data-aos="zoom-in">
            <small>Copyright © 2020 UncleSam's Republic. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
