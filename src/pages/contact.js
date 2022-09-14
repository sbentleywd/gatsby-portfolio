import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
    },
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  // default form state, all fields blank
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  // update state on form change
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  // Netlify forms submission
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => {
        alert("Form submitted")
        setFormState({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <Layout>
      <Head title="Contact" />
      <div id={contactStyles.contactContainer}>
        <div id={contactStyles.contactDetails}>
          <div className={contactStyles.contactDetailsRow}>
            <div className={contactStyles.contactIconContainer}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={"contact-icon"}
                title="Email"
              />
            </div>{" "}
            <a href="mailto:sbentleywd@gmail.com">sbentleywd@gmail.com</a>
          </div>
          <div className={contactStyles.contactDetailsRow}>
            <div className={contactStyles.contactIconContainer}>
              <FontAwesomeIcon
                icon={faGithub}
                className={"contact-icon"}
                title="Github"
              />
            </div>{" "}
            <a
              href="https://github.com/sbentleywd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className={contactStyles.contactDetailsRow}>
            <div className={contactStyles.contactIconContainer}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={"contact-icon"}
                title="linkedin"
              />
            </div>{" "}
            <a
              href="https://linkedin.com/in/sbentleywd"
              rel="noopener noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div className={contactStyles.contactDetailsRow}>
            <div className={contactStyles.contactIconContainer}>
              <FontAwesomeIcon
                icon={faTwitter}
                className={"contact-icon"}
                title="Twitter"
              />
            </div>{" "}
            <a
              href="https://twitter.com/sbentleywd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>

        <div id={contactStyles.contactForm}>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={classes.root}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div id={contactStyles.firstLine}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="Name"
              ></input>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Email"
              ></input>
            </div>
            <div id={contactStyles.secondLine}>
              <textarea
                id={contactStyles.message}
                type="text"
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Message"
                multiline
                fullWidth
              ></textarea>
            </div>
            <div id={contactStyles.thirdLine}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
