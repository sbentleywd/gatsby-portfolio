import React, { useState} from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    console.log("change")
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

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }
  return (
    <Layout>
      <Head title="Contact" />
      <div id={contactStyles.contactContainer}>
      <div id={contactStyles.contactDetails}>
        <p>Email: <a href="mailto:sbentleywd@gmail.com">sbentleywd@gmail.com</a></p>
        <p>Tel: +64 210 886 3761</p>
        <p><a href="https://github.com/sbentley85" rel="noopener noreferrer">Github</a></p>
      </div>

      <div id={contactStyles.contactForm}>
        <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            
          <input type="hidden" name="form-name" value="contact" />
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
          <textarea
            id={contactStyles.message}
            type="text"
            name="message"
            onChange={handleChange}
            value={formState.message}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>  
      
      
    
    </Layout>
  )
}

export default ContactPage;
