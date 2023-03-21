import React from "react";
import style from "./style.module.css";
import Trade from "../../Images/trade.jpg";
import News from "../../Images/news.jpg";
import Coin from "../../Images/coins.jpg";
import Binance from "../../Images/contact.jpg";
import Block from "../../Images/block.jpg";
import Stable from "../../Images/stable.jpg";
// import Mempool from "../../Images/mempool.jpg";
// import Wallet from "../../Images/wallet.jpg";
// import Input from "../../Images/input.jpg";
// import Exchange from "../../Images/exchange.jpg";
// import VR from "../../Images/vr.jpg";
// import Metaverse from "../../Images/metaverse.jpg";
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
                  src={Trade}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBoxWithOutAbosul} data-aos="fade-up">
                <h3>
                  What is BTC dominance: <br /> How to use it in your trade.
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
                  src={News}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBoxWithOutAbosul} data-aos="fade-up">
                <h3>Does coinbase report to the Irs?</h3>
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
                  src={Coin}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox} data-aos="fade-up">
                <h3>Best way to use stable coin.</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Binance}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox} data-aos="fade-up">
                <h3>How to buy bitcoin using binance p2p</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Stable}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox} data-aos="fade-up">
                <h3>Why does stablecoins loss their pegs</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
            <div className={style.gridCardRight}>
              <div className={style.imgBox}>
                <img
                  src={Block}
                  alt="crypto.render"
                  className={style.cryptoImage}
                />
              </div>
              <div className={style.contentBox} data-aos="fade-up">
                <h3>What data does the bitcoin blockchain store.</h3>
                <span>
                  <p>@Bitcoin</p>
                  <p>January, 19-2023</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
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
                src={Mempool}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>MEMpool <br /> in crypto</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Wallet}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>Crypto hardware wallets compared: ledger nano vs trezor model one</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Input}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>The 4 best apps for <br /> NFT enthusiasts</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Exchange}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>The best 7 crypto exchanges for u.s residents</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={Metaverse}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>What is Metaverse and how does it work?</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
          <div className={style.gridCardRight}>
            <div className={style.imgBox}>
              <img
                src={VR}
                alt="crypto.render"
                className={style.cryptoImage}
              />
            </div>
            <div className={style.contentBox} data-aos="fade-up">
              <h3>4 best ways to learn about <br /> crypto</h3>
              <span>
                <p>@Bitcoin</p>
                <p>January, 19-2023</p>
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BusinessBlog;
