import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import DarkModeButtons from "./dark-mode-buttons"

const Layout = props => {
  // layout rendered on each page, adds header, floating buttons & containers to contents of each page component
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>
        {props.children}
        <DarkModeButtons />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
