import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import DarkModeButtons from "./dark-mode-buttons"
import Portfolio from "./portfolio"

const IndexLayout = props => {
  // layout rendered on each page, adds header, floating buttons & containers to contents of each page component
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
          <DarkModeButtons />
        </div>
      </div>
      <div className={layoutStyles.container}>
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}

export default IndexLayout
