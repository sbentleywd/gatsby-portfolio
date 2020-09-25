import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const LightButton = (props) => {
    const classes = useStyles();
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: 'yellow',
    };
    const handleClick = () => props.onClick && props.onClick('light');

    return (
        <Fab style={style}  aria-label="add">
            <WbSunnyIcon className="theme-toggle" onClick={handleClick} />
        </Fab>
    );
};

export default LightButton;