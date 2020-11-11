import React from "react"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import Fab from "@material-ui/core/Fab"

const DarkButton = props => {
  // style rules
  const style = {
    margin: 0,
    top: 25,
    right: 25,
    bottom: "auto",
    left: "auto",
    position: "fixed",
    backgroundColor: "black",
    zIndex: 10000,
  }

  // If the `onClick` prop exists, call it with 'dark'
  const handleClick = () => props.onClick && props.onClick("dark")

  return (
    <Fab style={style} color="primary" aria-label="dark-mode">
      <Brightness2Icon className="theme-toggle" onClick={handleClick} />
    </Fab>
  )
}

export default DarkButton
