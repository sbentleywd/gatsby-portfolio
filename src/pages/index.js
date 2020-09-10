import React from "react";
import { Link, withPrefix } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import Portfolio from '../components/portfolio'


const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      
      <h3>I'm Simon, a full-stack developer</h3>

      <p>I am a self-taught web developer with a passion for utilising a range of technologies to create interesting and functional websites. I started learning web development in 2019 and since making my first Hello World! React app I was hooked and realised that this was something I am passionate about and want to pursue professionally. Please take a look through my projects below and feel free to <Link to="/contact">get in touch</Link></p>

      <p><a rel="noopener noreferrer" href={withPrefix('/simonbentleycv20.pdf')} target="blank">Full CV</a></p>

      <Portfolio />
           
      
      

    </Layout>
  )
  
}

export default IndexPage;


