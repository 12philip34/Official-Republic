import React from "react";
import style from "./style.module.css";
import Image from "../../Images/darkPc.jpg";
import Typed from "react-typed";

const BusinessBlog = () => {
  return (
    <div className="">
      <div>
        <span className={style.latestBox}>
          <h1>
            <Typed strings={["Business"]} typeSpeed={150} backSpeed={90} loop />
          </h1>
        </span>
        <div className={style.BusinessGrid}>
          <div className={style.innerLeftGrid}>
            <div className={style.gridCard}>
              <div className={style.imgBox}>
                <img
                  src={Image}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBoxWithOutAbosul}>
                <h3>
                  Lorem ipsum dolor sit <br /> amet consectetur adipisicing.
                </h3>
                <span>
                  <p>@U-Republic</p>
                  <p>19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCard}>
              <div className={style.imgBox}>
                <img
                  src={Image}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBoxWithOutAbosul}>
                <h3>
                  Lorem ipsum dolor sit <br /> amet consectetur adipisicing.
                </h3>
                <span>
                  <p>@U-Republic</p>
                  <p>19-2023</p>
                </span>
              </div>
            </div>
          </div>
          <div className={style.rightGrid}>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Image}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox}>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Image}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox}>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Image}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox}>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Image}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox}>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <span className={style.latestBox}>
          <h1>
            <Typed
              strings={["CRYPTO TRENDS"]}
              typeSpeed={150}
              backSpeed={90}
              loop
            />
          </h1>
        </span>
        <div className={style.CryptoTreadsBox}>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Image}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox}>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBlog;
