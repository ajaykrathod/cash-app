import React from 'react'

import footerStyles from "./FixedFooter.module.css";
function FooterButtons({heroSection}) {
  return (
    <div className={heroSection ? footerStyles.buttons: footerStyles.darkButtons}>
        <button>
          <img alt='Apple Store' src={"./assets/images/appstore.png"} />
          APP STORE
        </button>
        <button>
          <img alt='Play Store' src={"./assets/images/playstore.png"} />
          GOOGLE PLAY
        </button>
      </div>
  )
}

export default FooterButtons