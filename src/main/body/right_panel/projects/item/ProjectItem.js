import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from '@material-ui/core';

import styles from './projectItemStyles';

function ProjectItem(props) {
  const classes = styles(props);
  return (
    <div className={classes.root}>
      {props.link ? (
        <Link className={classes.header} href={props.link || "#"}>
          {props.header}
        </Link>
      ) : (
        <span className={classes.header}>{props.header}</span>
      )}
      <div className={classes.description}>
        {props.description}
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  header: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ProjectItem;
