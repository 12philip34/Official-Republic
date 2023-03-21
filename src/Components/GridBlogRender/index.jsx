import React from "react";
import style from "./style.module.css";
import Image from "../../Images/bg.jpg";
import GridProps from "../GridProps";
import Typed from "react-typed";


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
          Image={Image}
          Label="Crypto Trends"
          Header="UFED to launch instant payments system"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="WEB1 VS WEB2 VS WEB3: WHAT IS THE DIFFERENCES?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="NFTs"
          Header="Where are NFt Stored?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="What are Crypto deriviatives, and how does it works?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Metaverse"
          Header="How to buy Virtual Lands in the metaverse."
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Crypto Trends"
          Header="How to stake your coins on metamask"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />

        <GridProps
          Image={Image}
          Label="Crypto Trends"
          Header="Binance mastercard debit card launched in brazil"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="How to start a career in the crypto space"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="MEMpool in crypto"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="What is an initial game offering(IGO)"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="Crypto hardware wallets compared: ledger nano vs trezor model one"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="NFTs"
          Header="The 4 best apps for NFT enthusiasts"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="The best 7 crypto exchanges for u.s residents"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="What are crypto lockdrop and airdrop?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Cryptocurency"
          Header="UncleSam’s Republic is a phenomenal crypto"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
        <GridProps
          Image={Image}
          Label="Bitcoin"
          Header="What is BTC dominance: How to use it in your trade."
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
         <GridProps
          Image={Image}
          Label="Cryptocurrency"
          Header="How to become a crypto content writer: 8 steps to get started."
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
         <GridProps
          Image={Image}
          Label="Cryptocurrency"
          Header="How to build a web3 curriculum on skill share"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
         <GridProps
          Image={Image}
          Label="Cryptocurrency"
          Header="4 best ways to learn about crypto"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
         <GridProps
          Image={Image}
          Label="Crypto"
          Header="Does coinbase report to the Irs?"
          TextBlog="UR-Blog"
          Date="March 12-2023"
        />
      </div>
    </div>
  );
};

export default GridBlogRender;
