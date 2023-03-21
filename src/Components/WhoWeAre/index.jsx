import React from "react";
import style from "./style.module.css";
import Regtangle from '../../Images/light.png'

const WhoWeAre = () => {
  return (
    <div>
      <div className={style.whoAreWeBox}>
        <h1 data-aos="fade-up">
          DEFI & NFT <br />
           <img src={Regtangle} alt="regtangle.png" /> <br />
          MARKETING AGENCY
        </h1>
      </div>
    </div>
  );
};
export default WhoWeAre;
