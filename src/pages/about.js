import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.aboutContainer}>
        <p className={aboutStyles.aboutTest}>
          My name is Simon, I'm a web developer based in London.
        </p>
        <p>
          I am a self-educated web developer experienced in using a range of
          modern technologies. Web Development began as a skill I was interested
          in learning and led to a career path I wanted to follow. I have
          previously had a successful career as an accountant and always
          enjoyed the analytical and problem-solving aspect of finance.
        </p>
        <p>
          I'm currently looking for a role where I can contribute to a company I
          am passionate about and further develop my skillset so if you'd like
          to discuss what I can bring to your company or project please{" "}
          <Link to="/contact">get in touch</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
