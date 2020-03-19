import React from 'react';

// Internal imports
import './Body.scss';
import BodyMain from './main/BodyMain';
import RightPanel from './right_panel/RightPanel';

function Body(props) {
  return (
    <div className="Body-root">
      <BodyMain />
      <RightPanel />
    </div>
  );
}

export default Body;
