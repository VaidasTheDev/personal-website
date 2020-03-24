import React from 'react';
import { isMobile } from 'react-device-detect';

// Internal imports
import styles from './bodyStyles';
import BodyMain from './main/BodyMain';
import RightPanel from './right_panel/RightPanel';

function Body(props) {
  const classes = styles(props);

  const rootClassName = isMobile ? classes.root + ' mobile' : classes.root;

  return (
    <div className={rootClassName}>
      {!isMobile ? <BodyMain /> : <RightPanel />}
      {!isMobile ? <RightPanel /> : <BodyMain />}
    </div>
  );
}

export default Body;
