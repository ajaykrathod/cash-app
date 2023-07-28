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
        src={"/assets/images/banking-hole full.png"}
        className={bankingStyles.holefull}
      />
      <img
        src={"/assets/images/banking-column.png"}
        className={bankingStyles.column}
      />
      <img
        src={"/assets/images/banking-track-2.png"}
        className={bankingStyles.track2}
      />
      <img
        src={"/assets/images/banking-track-1.png"}
        className={bankingStyles.track1}
      />
      <img
        src={"/assets/images/banking-phone.png"}
        className={bankingStyles.mobile}
      />
      <img
        src={"/assets/images/banking-ramp-1.png"}
        className={bankingStyles.ramp1}
      />
      <img
        src={"/assets/images/banking-stairs-2.png"}
        className={bankingStyles.stairs2}
      />
      <img
        src={"/assets/images/banking-cubes.png"}
        className={bankingStyles.cubes}
      />
      <img
        src={"/assets/images/banking-stairs-1.png"}
        className={bankingStyles.stairs1}
      />
      <img
        src={"/assets/images/banking-ramp-2.png"}
        className={bankingStyles.ramp2}
      />
      <img
        src={"/assets/images/banking-monster.png"}
        className={bankingStyles.monster}
      />
      <img
        src={"/assets/images/banking-tube.png"}
        className={bankingStyles.tube}
      />
      <img
        src={"/assets/images/banking-hole.png"}
        className={bankingStyles.hole}
      />
    </section>
  );
}

export default BankingSection;
