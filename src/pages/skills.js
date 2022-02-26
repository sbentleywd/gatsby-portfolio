import React from "react"
import skillsStyles from "./skills.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"

import Button from "@material-ui/core/Button"
import CloudDownload from "@material-ui/icons/CloudDownload"
import { withPrefix } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import SkillsIcon from "../components/skillsIcon"

import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faVuejs,
  faNodeJs,
  faNpm,
  faSass,
  faGit,
} from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const skills = [
  { skill: "HTML", icon: faHtml5, title: "HTML 5" },
  { skill: "CSS", icon: faCss3Alt, title: "CSS 3" },
  { skill: "Javascript", icon: faJsSquare, title: "Javascript" },
  { skill: "React", icon: faReact, title: "Javascript" },
  { skill: "Vue", icon: faVuejs, title: "Javascript" },
  { skill: "Node JS", icon: faNodeJs, title: "Javascript" },
  { skill: "npm", icon: faNpm, title: "Javascript" },
  { skill: "Sass", icon: faSass, title: "Javascript" },
  { skill: "Git", icon: faGit, title: "Javascript" },
  // { skill: "Python", icon: faPython, title: "Javascript" },
]

const SkillsPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head title="Skills" />

      <div id={skillsStyles.skillsContainer}>
        <div id={skillsStyles.skillsIcons}>
          {skills.map(skill => {
            return <SkillsIcon skill={skill} key={skill.skill} />
          })}
        </div>

        <div id={skillsStyles.skillsDetails}>
          <ul>
            <li>Version control: Git & Github</li>
            <li>Responsive design, Bootstrap & Materialize</li>
            <li>Some experience using JQuery</li>
            <li>Exposure to python</li>
          </ul>
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<CloudDownload />}
          >
            <a
              rel="noopener noreferrer"
              href={withPrefix("/simonbentleycv20.pdf")}
              target="blank"
              id="download"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default SkillsPage
