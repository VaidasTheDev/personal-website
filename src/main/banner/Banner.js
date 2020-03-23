import React from 'react';
import {
  Avatar,
  Typography
} from '@material-ui/core';
import { isMobile } from 'react-device-detect';

// Internal imports
import styles from './bannerStyles';
import data from 'data/data';
import AvatarImage from 'images/me.png';
import { getButton } from './buttons';

function Banner(props) {
  const classes = styles(props);

  const infoData = data.banner.info;
  const buttonData = data.banner.buttons;

  const rootClassName = isMobile ? classes.root + ' mobile' : classes.root;
  const introClassName = isMobile ? classes.intro + ' mobile' : classes.intro;
  const headerDescClassName = isMobile ? classes.headerDesc + ' mobile' : classes.headerDesc;

  return (
    <div className={rootClassName}>
      <Avatar
        className={classes.avatar}
        alt="Avatar"
        src={AvatarImage}
      />
      <div className={introClassName}>
        <Typography variant="h3" style={{ width: 'fit-content'}}>
          {infoData.name}
        </Typography>
        <Typography variant="h6" className={classes.subheader}>
          {infoData.profession}
        </Typography>
        <Typography variant="caption" className={headerDescClassName}>
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
