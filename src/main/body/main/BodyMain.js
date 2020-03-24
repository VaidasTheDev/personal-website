import React from 'react';

import styles from './bodyMainStyles';
import data from 'data/data';
import BodySection from './section/BodySection';
import SectionItem from './section/item/SectionItem';

function BodyMain(props) {
  const classes = styles(props);
  return (
    <div className={classes.root}>
      {data.body.sections.map((s, i) => (
        <BodySection
          key={i}
          header={s.header}
        >
          {s.items.map((item, si) => (
            <SectionItem
              key={si}
              {...item}
            />
          ))}
        </BodySection>
      ))}
    </div>
  );
}

export default BodyMain;
