import React from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

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

const DarkButton = (props) => {
    const classes = useStyles();
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: 'black',

    };
    const handleClick = () => props.onClick && props.onClick('dark');

    return (
        <Fab  style={style} color="primary" aria-label="add">
            <Brightness2Icon className="theme-toggle" onClick={handleClick}  />
        </Fab>
    );
};

export default DarkButton;