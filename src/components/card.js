import React from 'react';
import portfolioStyles from './portfolio.module.scss';
import recipes from '../assets/img/recipes2.png';


const Card = (props) => {
    const data = props.data;
    return (
      
        <div className={portfolioStyles.card}>
          <div className={portfolioStyles.cardImage}>
            <a href={data.projectLink} target="_blank" rel="noopener noreferrer">
              <img src={data.imgSRC} alt={data.imgAlt} />
            </a>
          </div>
          <div className={portfolioStyles.cardContent}>
            <h3 className={portfolioStyles.cardTitle}>{data.title}</h3>
            {data.description}
          </div>
          <div className={portfolioStyles.cardButtons}>
            <a
              href={data.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Project
            </a>
            
            {data.githubLink ? 
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            : <a/>}
          </div>
        </div>
      
    )
};

export default Card;