import React from "react";
import style from "./style.module.css";
import Image from "../../Images/darkPc.jpg";
import Typed from "react-typed";


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
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
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
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
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
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
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
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
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
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
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
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
              <label>Cryptocurrency</label>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
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
