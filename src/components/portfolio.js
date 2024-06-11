import React from "react"
// import covid from "../assets/img/covid2.png"
import word from "../assets/img/word.png"
// import recipes from "../assets/img/recipes2.png"
import spotify from "../assets/img/spotify.png"
import portfolioStyles from "./portfolio.module.scss"
import Card from "./card"

const Portfolio = () => {
  // renders cards for each portfolio projects

  const projects = [
    {
      title: "Spotify Recommend",
      description:
        "An app using Spotify Web API and player SDK to recommend and play songs. Built with React, Typescript. (Requires Spotify Premium)",
      projectLink: "https://spotify-recommend.netlify.app/",
      githubLink: "https://github.com/sbentleywd/spotify-recommend",
      imgSRC: spotify,
      imgAlt: "spotify screenshot",
    },
    {
      title: "Word Game",
      description: "A wordle clone using Vue 2, Vuex and Typescript",
      projectLink: "https://word-gaaame.netlify.app/",
      githubLink: "https://github.com/sbentleywd/word-game",
      imgSRC: word,
      imgAlt: "Word game screenshot",
    },
    // {
    //   title: "Recipe DB",
    //   description:
    //     "A no-nonsense recipe app using React, NodeJS, Express, PostgreSQL & Auth0 authorization.",
    //   projectLink: "https://ancient-forest-86382.herokuapp.com/",
    //   githubLink: "https://github.com/sbentleywd/recipes_db",
    //   imgSRC: recipes,
    //   imgAlt: "recipes screenshot",
    // },
    // {
    //   title: "Covid Tracker",
    //   description:
    //     "Uses React, Redux, Material UI & ChartJS to display Covid-19 case data by country or UK region",
    //   projectLink: "https://covvvid2.netlify.app/",
    //   githubLink: "https://github.com/sbentleywd/covid-react",
    //   imgSRC: covid,
    //   imgAlt: "Covid tracker screenshot",
    // },
  ]

  return (
    <div id="portfolio" className={portfolioStyles.portfolio}>
      <h3>Portfolio</h3>

      <div className={portfolioStyles.cardContainer}>
        {projects.map(project => {
          return <Card data={project} key={project.imgSRC} />
        })}
      </div>
    </div>
  )
}

export default Portfolio
