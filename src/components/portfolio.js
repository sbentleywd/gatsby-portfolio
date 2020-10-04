import React from "react";
import covid from '../assets/img/covid2.png';
import explore from '../assets/img/explore2.jpg';
import blog from '../assets/img/blog.png';
import recipes from '../assets/img/recipes2.png';
import chiang from '../assets/img/chiang.png';
import portfolioStyles from './portfolio.module.scss';
import Card from './card';



const Portfolio = () => {
  // renders cards for each portfolio projects
  // todo - create reuseable card component
  const projects = [
    {
    title: 'Recipe DB',
    description: 'A no-nonsense recipe app using React, NodeJS, Express, PostgreSQL & Auth0 authorization.',
    projectLink: "https://ancient-forest-86382.herokuapp.com/",
    githubLink: 'https://github.com/sbentley85/recipes_db',
    imgSRC: recipes,
    imgAlt: 'recipes screenshot'
    },
    {
      title: 'Covid Tracker',
      description: 'Uses Covid-19 API and Chart.js to display Covid-19 case data by country.',
      projectLink: "https://covvvid.netlify.app/",
      githubLink: 'https://github.com/sbentley85/covid',
      imgSRC: covid,
      imgAlt: 'Covid tracker screenshot'
    },
    {
      title: 'Explore',
      description: 'A travel app using Vue, NodeJS & Express making calls to multiple 3rd party APIs.',
      projectLink: "https://tranquil-garden-84884.herokuapp.com/",
      githubLink: 'https://github.com/sbentley85/Explore',
      imgSRC: explore,
      imgAlt: 'Explore screenshot'
    },
    {
      title: 'codebloggg',
      description: 'A blog page using Gatsby and Contentful CMS.',
      projectLink: "https://codebloggg.netlify.app/",
      githubLink: 'https://github.com/sbentley85/gatsby-blog',
      imgSRC: blog,
      imgAlt: 'codebloggg screenshot'
    },
    {
      title: 'Chiang Mai',
      description: 'A site for a local Thai restaurant',
      projectLink: "https://chiangmaicottage.netlify.app/",
      githubLink: null,
      imgSRC: chiang,
      imgAlt: 'Chiang Mai screenshot'
    },
  ]

  return (
    <div>
      <h3>Portfolio</h3>
      
      <div className={portfolioStyles.cardContainer}>
        {projects.map((project)=> {
          return <Card data={project} />
        })}
        
        
        
      </div>
    </div>
  )
}

export default Portfolio;  
