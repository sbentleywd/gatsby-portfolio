import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div>
        <span>
          {data.site.siteMetadata.author}, &copy; 2024. Created with Gatsby
        </span>
      </div>
      <div>
        <span className={footerStyles.socialIconContainer}>
          <a
            href="https://github.com/sbentleywd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={footerStyles.socialIcon}
              title="Email"
              size="2x"
            />
          </a>
        </span>
        <span className={footerStyles.socialIconContainer}>
          <a
            href="https://linkedin.com/in/sbentleywd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={footerStyles.socialIcon}
              title="Email"
              size="2x"
            />
          </a>
        </span>
        <span className={footerStyles.socialIconContainer}>
          <a
            href="https://twitter.com/sbentleywd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={footerStyles.socialIcon}
              title="Email"
              size="2x"
            />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
