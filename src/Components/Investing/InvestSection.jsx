import React from "react";
import investStyles from "./Invest.module.css";
import FixedFooter from "../FixedFooter/FixedFooter";
import FooterButtons from "../FixedFooter/FooterButtons";
import FooterText from "../FixedFooter/FooterText";

function InvestSection() {
  return (
    <section className={investStyles.container}>
      <div className={investStyles.info}>
        <h1 className={investStyles.header}>Investing</h1>
        <div className={investStyles.text}>
          <div className={investStyles.block}>
            <h2>Stocks</h2>
            <p>
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div className={investStyles.block}>
            <h2>Bitcoin</h2>
            <p>
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </p>
          </div>
        </div>
        <div className={investStyles.imageContainer}>
            <img src={"/assets/images/investing-stocks.png"} />
            <img src={"/assets/images/investing-bitcoin.png"} />
        </div>
      </div>
      <div className={investStyles.footer}>
        <img src={"/assets/images/investing-graph-1.png"}  className={investStyles.leftImage}/>
        <img src={"/assets/images/investing-graph-2.png"}  className={investStyles.graph}/>
        
        <img src={"/assets/images/investing-graph-3 1.png"} className={investStyles.rightImage}/>
      </div>
        <div className={investStyles.footerMain}>
          <FooterButtons heroSection={false} />
          <FooterText heroSection={false} />
          <div className={investStyles.icons}>
            <img src={'./assets/images/twitchDark.svg'}/>
            <img src={'./assets/images/twitterDark.svg'}/>
            <img src={'./assets/images/instaDark.svg'}/>
          </div>
        </div>
    </section>
  );
}

export default InvestSection;
