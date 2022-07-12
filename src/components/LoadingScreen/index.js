import React from 'react';

import classes from './LoadingScreen.module.css';

function LoadingAniMobile() {
  return (
    <div className={classes.center}>
      <div className={classes.ring} />
      <span>Loading...</span>
    </div>
  );
}

export default LoadingAniMobile;
