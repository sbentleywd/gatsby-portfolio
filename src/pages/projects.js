import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
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
import projectsStyles from './projects.module.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProjectsPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Head title="Projects"/>
      <h1>Projects</h1>
      
      <div className={projectsStyles.cardContainer}>

      
      <Card className={`${classes.root} ${projectsStyles.card}`}>
        <CardActionArea className={projectsStyles.cardAction}>
          <CardMedia
            className={classes.media}
            image={recipes}
            title="Recipe DB screenshot"
          />
          <CardContent className={projectsStyles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Recipe DB
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A no-nonsense recipe app using React, NodeJS, Express, PostgreSQL & Auth0 authorization. Aims to strip out the
            excessive narrative often associated with many recipe websites & blogs and provide a simple respository where
            recipes can be saved and shared.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={projectsStyles.cardButtons}>
          <Button size="small" color="primary">
          <a href="https://ancient-forest-86382.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/recipes_db" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={`${classes.root} ${projectsStyles.card}`}>
        <CardActionArea className={projectsStyles.cardAction}>
          <CardMedia
            className={classes.media}
            image={covid}
            title="Covid tracker screenshot"
          />
          <CardContent className={projectsStyles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Covid-19 Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Uses Covid-19 API and Chart.js to display Covid-19 case data by country.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={projectsStyles.cardButtons}>
          <Button size="small" color="primary">
          <a href="https://agitated-meninsky-df006d.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/covid" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={`${classes.root} ${projectsStyles.card}`}>
        <CardActionArea className={projectsStyles.cardAction}>
          <CardMedia
            className={classes.media}
            image={explore}
            title="Explore screenshot"
          />
          <CardContent className={projectsStyles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Explore
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A travel app using Vue, NodeJS & Express making calls to Skyscanner, Foursquare, OpenWeather, Unsplash & Yelp APIs. Provides users with deatails of top attractions, restaurants, weather conditions and flight details for cities worldwide.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={projectsStyles.cardButtons}>
          <Button size="small" color="primary">
          <a href="https://tranquil-garden-84884.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/Explore" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={`${classes.root} ${projectsStyles.card}`}>
        <CardActionArea className={projectsStyles.cardAction}>
          <CardMedia
            className={classes.media}
            image={sm}
            title="Blog screenshot"
          />
          <CardContent className={projectsStyles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            Contentful Blog
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A blog page using Gatsby and Contentful CMS
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={projectsStyles.cardButtons}>
          <Button size="small" color="primary">
          <a href="/blog" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/gatsby-portfolio" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={`${classes.root} ${projectsStyles.card}`}>
        <CardActionArea className={projectsStyles.cardAction}>
          <CardMedia
            className={classes.media}
            image={sm}
            title="SM Flooring screentshot"
          />
          <CardContent className={projectsStyles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            SM Flooring
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A static page for a family business using HTML, CSS, Bootstrap & vanilla Javascript to showcase the work of a flooring contractor
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={projectsStyles.cardButtons}>
          <Button size="small" color="primary">
          <a href="http://smflooring.epizy.com/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/smflooring" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      </div>
      
      
    </Layout>
  )
}

export default ProjectsPage;  
