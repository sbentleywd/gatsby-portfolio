import React from "react"
import { Link, withPrefix } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Icon from "@material-ui/core/Icon"
import CloudDownload from "@material-ui/icons/CloudDownload"

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
    <Layout>
      <Head title="Home" />

      <p>
        I am a web developer with a passion for using the latest technologies to
        create interesting and functional websites. Please take a look through
        my projects below and feel free to
        <Link to="/contact"> get in touch</Link>
      </p>

      <div className={classes.marginAutoContainer}>
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

      <Portfolio />
    </Layout>
  )
}

export default IndexPage
