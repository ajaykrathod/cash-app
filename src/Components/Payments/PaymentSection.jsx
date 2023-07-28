import React from "react";
import paymentStyle from "./Payment.module.css";
function PaymentSection() {
  return (
    <section className={paymentStyle.container}>
      <div className={paymentStyle.upper}>
        <div className={paymentStyle.infoSection}>
          <h1>Payments</h1>
          <p>
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan their
            QR code to pay.
          </p>
        </div>
      </div>
      <div className={paymentStyle.vector}>
        <img
          src={"/assets/images/payments-phone 1.png"}
          className={paymentStyle.mobile}
        />
        <img
          src={"/assets/images/payments-pillar-medium.png"}
          className={paymentStyle.colBetween}
        />
        <img
          src={"/assets/images/payments-column-bottom-left.png"}
          className={paymentStyle.paycol}
        />
        <img
          src={"/assets/images/payments-pillar-medium.png"}
          className={paymentStyle.medium}
        />
        <img
          src={"/assets/images/payments-pillar-small.png"}
          className={paymentStyle.small}
        />
        <img
          src={"/assets/images/payments-pillar-medium.png"}
          className={paymentStyle.mediumCenter}
        />
        <img
          src={"/assets/images/payments-pillar-medium.png"}
          className={paymentStyle.smallCenter}
        />
        <img
          src={"/assets/images/payments-pillar-large.png"}
          className={paymentStyle.large}
        />
        <img
          src={"/assets/images/payments-column-bottom-right.png"}
          className={paymentStyle.paycolright}
        />
        <img
          src={"/assets/images/payments-column.png"}
          className={paymentStyle.paycolbottom}
        />
      </div>
    </section>
  );
}

export default PaymentSection;
