import React from "react";
import footerStyles from "./FixedFooter.module.css";
import FooterButtons from "./FooterButtons";
import FooterText from "./FooterText";
function FixedFooter({ heroSection }) {
  return (
    <div className={footerStyles.footer}>
      <FooterButtons heroSection={heroSection} />
      {heroSection && (
        <img
          alt="Vector"
          src={"./assets/images/Vector.svg"}
          className={footerStyles.navigator}
        />
      )}
      <FooterText heroSection={heroSection} />
      <div className={footerStyles.icons}>
        <img alt="twitch" src={"./assets/images/twitch.svg"} />
        <img alt="twitter" src={"./assets/images/twitter.svg"} />
        <img alt="instagram" src={"./assets/images/insta.svg"} />
      </div>
    </div>
  );
}

export default FixedFooter;
