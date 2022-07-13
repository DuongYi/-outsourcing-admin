import React from "react";

import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "0px 0px 10px #cecccc",
    marginBottom: "100px",
    borderRadius: "20px",
    overflow: "hidden",
  },
}));

function UICard({ children, maxWidth }) {
  const classes = useStyles();
  return (
    <Container maxWidth={maxWidth}>
      <Box className={classes.root}>{children}</Box>
    </Container>
  );
}

UICard.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
};

export default UICard;
