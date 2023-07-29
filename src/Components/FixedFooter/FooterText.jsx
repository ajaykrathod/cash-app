import React from 'react'
import footerStyles from './FixedFooter.module.css'
function FooterText({heroSection}) {
  return (
    <div className={heroSection ? footerStyles.policyText: footerStyles.darkText}>
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
        our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
        trading offered by Cash App. Cash App Investing does not trade bitcoin
        and Cash App is not a member of FINRA or SIPC. Cash App facilitates
        banking services through Sutton Bank and Lincoln Savings Bank, Members
        FDIC.
      </div>
  )
}

export default FooterText