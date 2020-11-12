import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import IndexLayout from "../components/indexLayout"

import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import indexStyles from "./index.module.scss"
import { Link as ScrollLink } from "react-scroll"

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "2em 0",
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <>
      <IndexLayout>
        <Head title="Home" />
        <Container maxWidth="xl" className={indexStyles.landing}>
          <div className={indexStyles.landingHeader}>
            <h1>Simon Bentley</h1>
            <div className={indexStyles.headshot}></div>
          </div>

          <div className={indexStyles.landingText}>
            <p>
              I am a web developer with a passion for using the latest
              technologies to create interesting and functional websites. Please
              take a look through my projects below and feel free to
              <Link to="/contact"> get in touch</Link>
            </p>
          </div>
          <div className={indexStyles.portfolioButton}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              <ScrollLink
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Portfolio
              </ScrollLink>
            </Button>
          </div>
        </Container>
      </IndexLayout>
    </>
  )
}

export default IndexPage
