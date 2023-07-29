import React from "react";
import footerStyles from "./FixedFooter.module.css";
import FooterButtons from "./FooterButtons";
import FooterText from "./FooterText";
function FixedFooter({heroSection}) {
  return (
    <div className={footerStyles.footer}>
      <FooterButtons heroSection={heroSection}/>
      {heroSection && <img src={"./assets/images/Vector.svg"} className={footerStyles.navigator}/>}
      <FooterText heroSection={heroSection}/>
      <div className={footerStyles.icons}>
            <img src={'./assets/images/twitch.svg'}/>
            <img src={'./assets/images/twitter.svg'}/>
            <img src={'./assets/images/insta.svg'}/>
      </div>
    </div>
  );
}

export default FixedFooter;
