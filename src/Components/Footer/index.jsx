import React from "react";
import style from './style.module.css'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={style.footerBox}>
                <div className={style.topFooter}>
                    <span>
                        <h1 data-aos="zoom-in">Would you like us to manage your project?</h1>
                        <p data-aos="zoom-in">We are open 24/7 and taking consignments. <br />
                             Click the “blue button” to get in touch.</p>
                    </span>
                    <span data-aos="zoom-in">
                        <Link to="/contact">Contact Us</Link>
                    </span>
                </div>
            </div>
                <div className={style.bottomFooter}>
                    <small>Copyright © 2023 UncleSam's Republic | All Rights Reserved.</small>
                </div>
        </div>
    )
}

export default Footer;