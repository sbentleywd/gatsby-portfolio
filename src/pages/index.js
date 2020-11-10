import React from "react"
import { Link, withPrefix } from "gatsby"
import Head from "../components/head"
import IndexLayout from "../components/indexLayout"
import Portfolio from "../components/portfolio"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import CloudDownload from "@material-ui/icons/CloudDownload"
import indexStyles from "./index.module.scss"

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
          <div>
            <p>
              I am a web developer with a passion for using the latest
              technologies to create interesting and functional websites. Please
              take a look through my projects below and feel free to
              <Link to="/contact"> get in touch</Link>
            </p>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<CloudDownload />}
            >
              <a
                rel="noopener noreferrer"
                href={withPrefix("/simonbentleycv20.pdf")}
                target="blank"
                id="download"
              >
                Download CV
              </a>
            </Button>
          </div>
          <div className={indexStyles.portfolioButton}>
            <Button
              variant="outlines"
              color="primary"
              className={classes.button}
            >
              <a href={withPrefix("/#portfolio")}>Portfolio</a>
            </Button>
          </div>
        </Container>
      </IndexLayout>
    </>
  )
}

export default IndexPage
