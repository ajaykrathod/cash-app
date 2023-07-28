import React from "react";
import footerStyles from "./FixedFooter.module.css";
function FixedFooter({heroSection}) {
  return (
    <div className={footerStyles.footer}>
      <div className={heroSection ? footerStyles.buttons: footerStyles.darkButtons}>
        <button>
          <img src={"./assets/images/appstore.png"} />
          APP STORE
        </button>
        <button>
          <img src={"./assets/images/playstore.png"} />
          GOOGLE PLAY
        </button>
      </div>
      {heroSection && <img src={"./assets/images/Vector.svg"} className={footerStyles.navigator}/>}
      <div className={heroSection ? footerStyles.policyText: footerStyles.darkText}>
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
        our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
        trading offered by Cash App. Cash App Investing does not trade bitcoin
        and Cash App is not a member of FINRA or SIPC. Cash App facilitates
        banking services through Sutton Bank and Lincoln Savings Bank, Members
        FDIC.
      </div>
      <div className={heroSection ? footerStyles.icons : footerStyles.darkIcons}>
            <img src={'./assets/images/twitch.svg'}/>
            <img src={'./assets/images/twitter.svg'}/>
            <img src={'./assets/images/insta.svg'}/>
      </div>
    </div>
  );
}

export default FixedFooter;
