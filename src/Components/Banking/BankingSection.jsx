import React from "react";
import bankingStyles from "./Banking.module.css";

function BankingSection() {
  return (
    <section className={bankingStyles.container}>
      <div className={bankingStyles.infoSection}>
        <h1>Banking</h1>
        <p>
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <img
        alt="banking hole"
        src={"/assets/images/banking-hole full.png"}
        className={bankingStyles.holefull}
      />
      <img
        alt="banking column"
        src={"/assets/images/banking-column.png"}
        className={bankingStyles.column}
      />
      <img
        alt="banking track 2"
        src={"/assets/images/banking-track-2.png"}
        className={bankingStyles.track2}
      />
      <img
        alt="banking track 1"
        src={"/assets/images/banking-track-1.png"}
        className={bankingStyles.track1}
      />
      <img
        alt="banking phone"
        src={"/assets/images/banking-phone.png"}
        className={bankingStyles.mobile}
      />
      <img
        alt="banking ramp"
        src={"/assets/images/banking-ramp-1.png"}
        className={bankingStyles.ramp1}
      />
      <img
        alt="banking stairs"
        src={"/assets/images/banking-stairs-2.png"}
        className={bankingStyles.stairs2}
      />
      <img
        alt="banking cubes"
        src={"/assets/images/banking-cubes.png"}
        className={bankingStyles.cubes}
      />
      <img
        alt="banking stairs"
        src={"/assets/images/banking-stairs-1.png"}
        className={bankingStyles.stairs1}
      />
      <img
        alt="banking ramp"
        src={"/assets/images/banking-ramp-2.png"}
        className={bankingStyles.ramp2}
      />
      <img
        alt="banking monster"
        src={"/assets/images/banking-monster.png"}
        className={bankingStyles.monster}
      />
      <img
        alt="banking tube"
        src={"/assets/images/banking-tube.png"}
        className={bankingStyles.tube}
      />
      <img
        alt="bamking hole"
        src={"/assets/images/banking-hole.png"}
        className={bankingStyles.hole}
      />
    </section>
  );
}

export default BankingSection;
