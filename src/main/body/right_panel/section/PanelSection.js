import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Typography
} from '@material-ui/core';

import styles from './panelSectionStyles';

function PanelSection(props) {
  const classes = styles(props);
  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <Typography
          className={classes.title}
          variant="body1"
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          component="div"
        >
          {props.children}
        </Typography>
      </div>
    </Paper>
  );
}

PanelSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default PanelSection;
