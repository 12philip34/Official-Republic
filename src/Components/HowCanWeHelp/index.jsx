import React from "react";
import style from "./style.module.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AttributionIcon from '@mui/icons-material/Attribution';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TwitterIcon from '@mui/icons-material/Twitter';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const HowWeCanHelp = () => {

  const HelpIcon ={
    color: 'white'
  }
  return (
    <div className={style.helpGrid}>
      <h1 data-aos="fade-up">How We Can Help</h1>  
      <div className={style.HowWeCanHelpGrid}>
        <span data-aos="fade-up">
          <small><ManageAccountsIcon style={HelpIcon} /></small>
          <h2>Community Management</h2>
          <p>
            We grow a thriving community and ensure community activities through
            our Community Management skills.
          </p>
        </span>
        <span data-aos="fade-up">
          <small><RecordVoiceOverIcon style={HelpIcon} /></small>
          <h2>Community Moderation</h2>
          <p>
          We create a welcoming environment for your community, thus ensuring brand loyalty
          </p>
        </span>
        <span data-aos="fade-up">
          <small><RecordVoiceOverIcon style={HelpIcon} /></small>
          <h2>Community Engagement /Chatters</h2>
          <p>
          We ensure your budding community is kept lively with the help of our experienced chatters
          </p>
        </span>
        <span data-aos="fade-up">
          <small><AttributionIcon style={HelpIcon} /></small>
          <h2>Social Media Management</h2>
          <p>
          We grow and manage your social media platforms
           through guaranteed strategies that’d ensure brand awareness.
          </p>
        </span>
        <span data-aos="fade-up">
          <small><ConnectWithoutContactIcon style={HelpIcon} /></small>
          <h2>Content Creation</h2>
          <p>
          We create brand tailored content to suit the 
          brand image and drive traffic from your project’s ideal audience
          </p>
        </span>
        <span data-aos="fade-up">
          <small><TwitterIcon style={HelpIcon} /></small>
          <h2>Twitter Trend</h2>
          <p>
          We help make your project trend on twitter
           for an agreed period of time, through guaranteed strategies
          </p>
        </span>
        <span data-aos="fade-up">
          <small><VideoCameraFrontIcon style={HelpIcon} /></small>
          <h2>Video Content (explainer videos) and Animations</h2>
          <p>
          We help create video content and animations
           for postings on video platforms to increase brand awareness
          </p>
        </span>
        <span data-aos="fade-up">
          <small><GraphicEqIcon style={HelpIcon} /></small>
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
