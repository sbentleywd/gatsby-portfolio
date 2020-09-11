import React from "react"
import { Link } from 'gatsby'
import Layout from './layout'
import Head from './head'
import covid from '../assets/img/covid2.png'
import explore from '../assets/img/explore2.jpg'
import recipes from '../assets/img/recipes2.png'
import sm from '../assets/img/sm2.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import portfolioStyles from './portfolio.module.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 291,
  },
  media: {
    height: 189,
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div>
      <h3>Portfolio</h3>

      <div className={portfolioStyles.cardContainer}>
        <a
          href="https://ancient-forest-86382.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={portfolioStyles.card}>
            <div className={portfolioStyles.cardImage}>
              <img src={recipes} alt="recipes screenshot" />
            </div>
            <div className={portfolioStyles.cardContent}>
              A no-nonsense recipe app using React, NodeJS, Express, PostgreSQL
              & Auth0 authorization.
            </div>
            <div className={portfolioStyles.cardButtons}>
              <a
                href="https://ancient-forest-86382.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Project
              </a>
              <a
                href="https://github.com/sbentley85/recipes_db"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </a>

        <a
          href="https://agitated-meninsky-df006d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={portfolioStyles.card}>
            <div className={portfolioStyles.cardImage}>
              <img src={covid} alt="Covid tracker screenshot" />
            </div>
            <div className={portfolioStyles.cardContent}>
            Uses Covid-19 API and Chart.js to display Covid-19 case data
                  by country.
            </div>
            <div className={portfolioStyles.cardButtons}>
              <a
                href="https://agitated-meninsky-df006d.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Project
              </a>
              <a
                href="https://github.com/sbentley85/covid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </a>


        <a
          href="https://tranquil-garden-84884.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={portfolioStyles.card}>
            <div className={portfolioStyles.cardImage}>
              <img src={explore} alt="Explore screenshot" />
            </div>
            <div className={portfolioStyles.cardContent}>
            A travel app using Vue, NodeJS & Express making calls to
                  Skyscanner, Foursquare, OpenWeather, Unsplash & Yelp APIs.
                  
            </div>
            <div className={portfolioStyles.cardButtons}>
              <a
                href="hhttps://tranquil-garden-84884.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Project
              </a>
              <a
                href="https://github.com/sbentley85/Explore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </a>


        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={portfolioStyles.card}>
            <div className={portfolioStyles.cardImage}>
              <img src={covid} alt="recipes screenshot" />
            </div>
            <div className={portfolioStyles.cardContent}>
            A blog page using Gatsby and Contentful CMS
            </div>
            <div className={portfolioStyles.cardButtons}>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Project
              </a>
              <a
                href="https://github.com/sbentley85/gatsby-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </a>


        <a
          href="http://smflooring.epizy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={portfolioStyles.card}>
            <div className={portfolioStyles.cardImage}>
              <img src={sm} alt="SM Flooring screentshot" />
            </div>
            <div className={portfolioStyles.cardContent}>
            A static page for a family business using HTML, CSS, Bootstrap
                  & vanilla Javascript to showcase the work of a flooring
                  contractor
            </div>
            <div className={portfolioStyles.cardButtons}>
              <a
                href="http://smflooring.epizy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Project
              </a>
              <a
                href="https://github.com/sbentley85/smflooring"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </a>

        
        
      </div>
    </div>
  )
}

export default Portfolio;  
