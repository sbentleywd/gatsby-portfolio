import React from "react"
import WbSunnyIcon from "@material-ui/icons/WbSunny"

import Fab from "@material-ui/core/Fab"

const LightButton = props => {
  const style = {
    margin: 0,
    top: 25,
    right: 25,
    bottom: "auto",
    left: "auto",
    position: "fixed",
    backgroundColor: "yellow",
  }

  // If the `onClick` prop exists, call it with 'dark'
  const handleClick = () => props.onClick && props.onClick("light")

  return (
    <Fab style={style} aria-label="add">
      <WbSunnyIcon className="theme-toggle" onClick={handleClick} />
    </Fab>
  )
}

export default LightButton
