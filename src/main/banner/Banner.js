import React from 'react';
import {
  Avatar,
  Button,
  Typography
} from '@material-ui/core';
import { ReactSVG } from 'react-svg';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

// Internal imports
import styles from './bannerStyles';
import data from 'data/data';
import AvatarImage from 'images/me.png';
import StackOverflowSvg from 'svgs/stackoverflow.svg';

function Banner(props) {
  const classes = styles(props);

  const infoData = data.banner.info;
  const buttonData = data.banner.buttons;

  // Should generalise
  function getButton(btnData, index) {
    switch(btnData.type) {
      case "linkedin": return (
        <Button
          key={index}
          className={classes.buttonLinkedIn}
          color="primary"
          startIcon={<LinkedInIcon />}
          variant="contained"
          component="a"
          href={btnData.link}
          disableElevation
          disableRipple
          disableFocusRipple
        >
          LinkedIn
        </Button>
      );
      case "github": return (
        <Button
          key={index}
          className={classes.buttonGitHub}
          startIcon={<GitHubIcon />}
          variant="contained"
          component="a"
          href={btnData.link}
          disableElevation
          disableRipple
          disableFocusRipple
        >
          GitHub
        </Button>
      );
      case "stackoverflow": return (
        <Button
          key={index}
          className={classes.buttonStackOverflow}
          variant="contained"
          component="a"
          href={btnData.link}
          disableElevation
          disableRipple
          disableFocusRipple
        >
          <ReactSVG src={StackOverflowSvg} className={classes.svg} />
          Stack Overflow
        </Button>
      );
      default: return null;
    }
  }

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        alt="Avatar"
        src={AvatarImage}
      />
      <div className={classes.intro}>
        <Typography variant="h3">
          {infoData.name}
        </Typography>
        <Typography variant="h6" className={classes.subheader}>
          {infoData.profession}
        </Typography>
        <Typography variant="caption" className={classes.headerDesc}>
          {infoData.intro}
        </Typography>
        <div className={classes.buttons}>
          {buttonData.map((btn, i) => getButton(btn, i))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
