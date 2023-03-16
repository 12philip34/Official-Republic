import React from "react";
import style from "./style.module.css";

const Cards = () => {
  return (
    <div>
      <div className={style.aboutCard}>
        <label data-aos="fade-up">
          <h2 data-aos="fade-up">Who Are We</h2>
          <p data-aos="fade-up">
            UncleSam’s Republic is a phenomenal crypto marketing agency with a
            flare for building a thriving and loyal crypto community.
          </p>
          <p data-aos="fade-up">
            For your crypto project(s) through guaranteed marketing strategies.
            We are your project’s Chaperone!
          </p>
          <span></span>
        </label>
        <label data-aos="fade-up">
          <h2 data-aos="fade-up">Our Mission</h2>
          <p data-aos="fade-up">
            We are driven by the need to help completely express the true
            potential of your project, because understand to get adoption, your
            ideal audience needs to fully understand how your project will be of
            benefit to them.
          </p>
          <p data-aos="fade-up">
            Thus, we help you express these through strategic storytelling and
            other guarantee marketing strategies.
          </p>
          <span></span>
        </label>
        <label data-aos="fade-up">
          <h2 data-aos="fade-up">Our Services</h2>
          <ul>
            <li data-aos="fade-up">Community Management / Moderation</li>
            <li data-aos="fade-up">Community Engagement / Chatters</li>
            <li data-aos="fade-up">Social Media Management</li>
            <li data-aos="fade-up">Content Creation</li>
            <li data-aos="fade-up">Twitter Trend</li>
            <li data-aos="fade-up">Video Content and Animations</li>
            <li data-aos="fade-up">Graphics Design</li>
            <li data-aos="fade-up">Organize Offline Meetups</li>
          </ul>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Cards;
