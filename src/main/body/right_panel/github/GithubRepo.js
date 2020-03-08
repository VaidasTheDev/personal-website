import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from '@material-ui/core';

import styles from './githubRepoStyles';
import GitHubIcon from '@material-ui/icons/GitHub';

function GithubRepo(props) {
  const classes = styles(props);
  return (
    <Button
      className={classes.root}
      component="a"
      href={props.link}
      startIcon={<GitHubIcon />}
    >
      {props.name}
    </Button>
  );
}

GithubRepo.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default GithubRepo;
