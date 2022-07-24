import React from "react";

import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  topTitle: {
    textTransform: "uppercase",
    fontWeight: 550,
    fontFamily: "Public Sans",
    padding: "15px",
    display: "inline-block",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "0 auto 30px auto",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "70%",
      height: "4px",
      background: "#3a7bd5",
      bottom: "0",
      left: "15%",
    },
  },
}));

function TopTitle({ children }) {
  const classes = useStyles();

  return (
    <Typography className={classes.topTitle} variant="h4" align="center">
      {children}
    </Typography>
  );
}

TopTitle.propTypes = {
  children: PropTypes.node,
};

export default TopTitle;
