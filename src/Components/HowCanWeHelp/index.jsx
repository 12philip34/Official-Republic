import React from "react";
import style from "./style.css";

const HowWeCanHelp = () => {
  return (
    <div>
      <h1>How We Can Help</h1>
      <div className={style.HowWeCanHelpGrid}>
        <span>
          <h2>Community Management</h2>
          <p>
            We grow a thriving community and ensure community activities through
            our Community Management skills.
          </p>
        </span>
        <span>
          <h2>Community Moderation</h2>
          <p>
          We create a welcoming environment for your community, thus ensuring brand loyalty
          </p>
        </span>
        <span>
          <h2>Community Engagement /Chatters</h2>
          <p>
          We ensure your budding community is kept lively with the help of our experienced chatters
          </p>
        </span>
        <span>
          <h2>Social Media Management</h2>
          <p>
          We grow and manage your social media platforms
           through guaranteed strategies that’d ensure brand awareness.
          </p>
        </span>
        <span>
          <h2>Content Creation</h2>
          <p>
          We create brand tailored content to suit the 
          brand image and drive traffic from your project’s ideal audience
          </p>
        </span>
        <span>
          <h2>Twitter Trend</h2>
          <p>
          We help make your project trend on twitter
           for an agreed period of time, through guaranteed strategies
          </p>
        </span>
        <span>
          <h2>Video Content (explainer videos) and Animations</h2>
          <p>
          We help create video content and animations
           for postings on video platforms to increase brand awareness
          </p>
        </span>
        <span>
          <h2>Graphics Design</h2>
          <p>
          We create graphics designs tailored
           towards ensuring you brand tone and voice is expressed efficiently
          </p>
        </span>
      </div>
    </div>
  );
};

export default HowWeCanHelp;
