import React from 'react';
import PropTypes from 'prop-types';
import {
  Chip,
  Typography
} from '@material-ui/core';

import styles from './sectionItemStyles';

function SectionItem(props) {
  const classes = styles(props);
  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle1"
      >
        {props.header}
      </Typography>
      {props.subheader ? (
        <Typography
          variant="subtitle2"
        >
          {props.subheader}
        </Typography>
      ) : null}
      {props.meta ? (
        <Typography
          className={classes.caption}
          variant="caption"
        >
          {props.meta}
        </Typography>
      ) : null}
      <Typography
        variant="body1"
        component="div"
      >
        {props.description ? (
          <Typography
            className={classes.description}
            variant="body1"
          >
            {props.description}
          </Typography>
        ) : null}
        <ul className={classes.ul}>
          {props.listItems.map((li, index) => (
            <li key={index}>
              {li}
            </li>
          ))}
        </ul>
      </Typography>
      {props.chips ? (
        <div className={classes.chips}>
          {props.chips.map((chip, index) => (
            <Chip
              className={classes.chip}
              key={index}
              label={chip.label}
              color={chip.type === "secondary" ? "default" : chip.type}
              size="small"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

SectionItem.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
  listItems: PropTypes.array.isRequired
}

export default SectionItem;
