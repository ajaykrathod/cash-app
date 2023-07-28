import React from "react";
import cashStyles from "./Cashcard.module.css";
function CashCard() {
  return (
    <section className={cashStyles.container}>
      <div className={cashStyles.infoSection}>
        <h1>Cash Card & Boost</h1>
        <p>
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It’s the only way to get Boosts—instant
          discounts that work at places where you want to spend.
        </p>
      </div>
      <img
        className={cashStyles.stairs2}
        src={"/assets/images/boost-stairs-2.png"}
      />
      <img className={cashStyles.shoe} src={"/assets/images/boost-shoe.png"} />
      <img className={cashStyles.hand} src={"/assets/images/boost-hand.png"} />
      <img className={cashStyles.card} src={"/assets/images/boost-card.png"} />
      <img
        className={cashStyles.burger}
        src={"/assets/images/boost-burger.png"}
      />
      <img className={cashStyles.can} src={"/assets/images/boost-coffee.png"} />
      <img
        className={cashStyles.mobile}
        src={"/assets/images/boost-phone.png"}
      />
      <img
        className={cashStyles.stairs1}
        src={"/assets/images/boost-stairs-1.png"}
      />
    </section>
  );
}

export default CashCard;
