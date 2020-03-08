import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent
} from '@material-ui/core';

import styles from './styles';

function BodySection(props) {
  const classes = styles(props);
  return (
    <Card className={classes.root}>
      <CardHeader title={props.header} />
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

BodySection.propTypes = {
  header: PropTypes.string
}

export default BodySection;
