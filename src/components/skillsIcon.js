import React from "react"
import skillsStyles from "../pages/skills.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const skillsIcon = props => {
  return (
    <div className={skillsStyles.skillsIcon}>
      <FontAwesomeIcon
        icon={props.skill.icon}
        size="4x"
        title={props.skill.skill}
      />
      <p>{props.skill.skill}</p>
    </div>
  )
}

export default skillsIcon
