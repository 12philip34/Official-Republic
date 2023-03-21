import React from "react";
import style from "./style.module.css";
import GridProps from "../GridProps";
import Typed from "react-typed";
import Airdrop from "../../Images/airdrop.jpg";
// import Apps from "../../Images/apps.jpg";
import Coins from "../../Images/coins.jpg";
import Derive from "../../Images/derive.jpg";
import Land from "../../Images/land.jpg";
import Launch from "../../Images/launch.jpg";
import Learn from "../../Images/learn.jpg";
import News from "../../Images/news.jpg";
import Offer from "../../Images/offer.jpg";
import Start from "../../Images/start.jpg";
import Stored from "../../Images/stored.jpg";
import Trade from "../../Images/trade.jpg";
import VS from "../../Images/vs.jpg";
import Writer from "../../Images/writer.jpg";
import Card from "../../Images/card.jpg";
import Mempool from "../../Images/mempool.jpg";
import Wallet from "../../Images/wallet.jpg";
import Input from "../../Images/input.jpg";
import Exchange from "../../Images/exchange.jpg";
import VR from "../../Images/vr.jpg";
import Metaverse from "../../Images/metaverse.jpg";


const GridBlogRender = (props) => {
  return (
    <div>
      <span className={style.latestBox}>
        <h1>
          <Typed strings={["Latest"]} typeSpeed={150} backSpeed={90} loop />
        </h1>
      </span>
      <div className={style.gridBox}>
        <GridProps
          Image={Launch}
          Label="Crypto Trends"
          Header="FED to launch instant payments system"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={VS}
          Label="Cryptocurency"
          Header="WEB1 VS WEB2 VS WEB3: WHAT IS THE DIFFERENCES?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Stored}
          Label="NFTs"
          Header="Where are NFt Stored?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Derive}
          Label="Cryptocurency"
          Header="What are Crypto deriviatives, and how does it works?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Land}
          Label="Metaverse"
          Header="How to buy Virtual Lands in the metaverse."
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Coins}
          Label="Crypto Trends"
          Header="How to stake your coins on metamask."
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />

        <GridProps
          Image={Card}
          Label="Crypto Trends"
          Header="Binance mastercard debit card launched in brazil"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Start}
          Label="Cryptocurency"
          Header="How to start a career in the crypto space"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Mempool}
          Label="Cryptocurency"
          Header="MEMpool in crypto"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Offer}
          Label="Cryptocurency"
          Header="What is an initial game offering(IGO)"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Wallet}
          Label="Cryptocurency"
          Header="Crypto hardware wallets compared: ledger nano vs trezor model one"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Input}
          Label="NFTs"
          Header="The 4 best apps for NFT enthusiasts"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Exchange}
          Label="Cryptocurency"
          Header="The best 7 crypto exchanges for u.s residents"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Airdrop}
          Label="Cryptocurency"
          Header="What are crypto lockdrop and airdrop?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
        <GridProps
          Image={Trade}
          Label="Bitcoin"
          Header="What is BTC dominance: How to use it in your trade."
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
         <GridProps
          Image={Writer}
          Label="Cryptocurrency"
          Header="How to become a crypto content writer: 8 steps to get started."
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
         <GridProps
          Image={Learn}
          Label="Cryptocurrency"
          Header="How to build a web3 curriculum on skill share"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
         <GridProps
          Image={VR}
          Label="Cryptocurrency"
          Header="4 best ways to learn about crypto"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
         <GridProps
          Image={News}
          Label="Crypto"
          Header="Does coinbase report to the Irs?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
          <GridProps
          Image={Metaverse}
          Label="Cryptocurrency"
          Header="What is Metaverse and how does it work?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default GridBlogRender;
