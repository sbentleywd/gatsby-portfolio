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
      <p>These are some of the projects I've worked on</p>
      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={covid}
            title="Covid tracker screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Covid-19 Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Uses Covid-19 API and Chart.js to display Covid-19 case data by country.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://agitated-meninsky-df006d.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/covid" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={covid}
            title="Covid tracker screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Covid-19 Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Uses Covid-19 API and Chart.js to display Covid-19 case data by country.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://agitated-meninsky-df006d.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/covid" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={covid}
            title="Covid tracker screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Covid-19 Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Uses Covid-19 API and Chart.js to display Covid-19 case data by country.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://agitated-meninsky-df006d.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/covid" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={covid}
            title="Covid tracker screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Covid-19 Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Uses Covid-19 API and Chart.js to display Covid-19 case data by country.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://agitated-meninsky-df006d.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed Project</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://github.com/sbentley85/covid" target="_blank" rel="noopener noreferrer">Github</a>
          </Button>
        </CardActions>
      </Card>

      
      
    </Layout>
  )
}

export default ProjectsPage;  
