import React from "react";
import style from "./style.module.css";
import Launch from "../../Images/launchcrypt.jpg";
import Typed from "react-typed";
import News from "../../Images/news.jpg";
import Stored from "../../Images/stored.jpg";
import Derive from "../../Images/derive.jpg";
import Coins from "../../Images/coins.jpg";
import Start from "../../Images/start.jpg";



const CryptocurrencyGrid = () => {
  return (
    <div>
        <span className={style.latestBox}>
        <h1>
          <Typed strings={["Crypto", "currency"]} typeSpeed={150} backSpeed={90} loop />
        </h1>
      </span>
      <div className={style.CryptocurrencyGrid}>
        <div className={style.leftGrid}>
        <div className={style.gridCard}>
            <div className={style.imgBox}>
              <img
                src={Launch}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>FED to launch instant payments system?</h3>
              <span>
                <p>@U-Republic</p>
                <p>19-2023</p>
              </span>
            </div>
            </div>
          </div>
          <div className={style.innerLeftGrid}>
          <div className={style.gridCard}>
            <div className={style.imgBox}>
              <img
                src={News}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>Get better updates on day-to-day crypto activities</h3>
              <span>
                <p>@U-Republic</p>
                <p>19-2023</p>
              </span>
            </div>
            </div>
          </div>
          <div className={style.gridCard}>
            <div className={style.imgBox}>
              <img
                src={Stored}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>Where are NFt Stored?.</h3>
              <span>
                <p>@U-Republic</p>
                <p>19-2023</p>
              </span>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className={style.rightGrid}>
          <div className={style.gridCard}>
            <div className={style.imgBox}>
              <img
                src={Derive}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>What are Crypto deriviatives, and how does it works?</h3>
              <span>
                <p>@U-Republic</p>
                <p>19-2023</p>
              </span>
            </div>
            </div>
          </div>
          <div className={style.gridCard}>
            <div className={style.imgBox}>
              <img
                src={Coins}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>How to stake your coins on metamask.</h3>
              <span>
                <p>@U-Republic</p>
                <p>19-2023</p>
              </span>
            </div>
            </div>
          </div>
          <div className={style.gridCard}>
            <div className={style.imgBox}>
              <img
                src={Start}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>How to start a career in the crypto space</h3>
              <span>
                <p>@U-Republic</p>
                <p>19-2023</p>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptocurrencyGrid;
