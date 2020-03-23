import React from 'react';
import clsx from 'clsx';
import { ReactSVG } from 'react-svg';
import { makeStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';
import {
  Button
} from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import StackOverflowSvg from 'svgs/stackoverflow.svg';
import DefaultIcon from '@material-ui/icons/Language';

const styles = makeStyles(theme => ({
  buttonLinkedIn: {
    '& svg': {
      fill: theme.palette.linkedIn.main
    }
  },
  button: {
    backgroundColor: 'white'
  },
  buttonSize: {
    width: '20px',
    height: '20px'
  },
  buttonMargins: {
    width: '20px',
    height: '20px',
    marginLeft: '-4px',
    marginRight: '8px'
  },
  iconButtonMargins: {
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    minWidth: 0
  },
}));

function getButtonMetadata(type) {
  const classes = styles();

  switch(type) {
    case "linkedin": return {
      className: clsx(classes.buttonLinkedIn, classes.button),
      iconTag: LinkedInIcon
    };
    case "github": return {
      className: classes.button,
      iconTag: GitHubIcon
    };
    case "stackoverflow": return {
      className: classes.button,
      iconTag: ReactSVG,
      iconProps: {
        src: StackOverflowSvg
      }
    }
    default: return {
      className: classes.button,
      iconTag: DefaultIcon
    }
  }
}

// Should generalise
export function getButton(btnData, index) {
  const classes = styles();

  const metadata = getButtonMetadata(btnData.type);
  const IconTag = metadata.iconTag;

  if (isMobile) {
    return (
      <Button
        key={index}
        className={clsx(metadata.className, classes.iconButtonMargins)}
        variant="contained"
        href={btnData.link}
      >
        <IconTag
          {...metadata.iconProps}
          className={classes.buttonSize}
        />
      </Button>
    );
  } else {
    return (
      <Button
        key={index}
        className={metadata.className}
        variant="contained"
        href={btnData.link}
        disableElevation
        disableRipple
        disableFocusRipple
      >
        <IconTag
          {...metadata.iconProps}
          className={clsx(classes.buttonSize, classes.buttonMargins)}
        />
        {btnData.label}
      </Button>
    );
  }
}
