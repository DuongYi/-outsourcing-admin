import React from "react";

import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import Page from "src/components/Page";

import DashboardSidebar from "./DashboardSidebar";

const useStyles = makeStyles((theme) => ({
  DashboardLayoutRoot: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  DashboardLayoutWrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "280px",
    },
  },
  DashboardLayoutContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  DashboardLayoutContent: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
    position: "relative",
    WebkitOverflowScrolling: "touch",
  },
}));

function DashboardLayout({ children }) {
  const classes = useStyles();
  return (
    <Page>
      <div className={classes.DashboardLayoutRoot}>
        <DashboardSidebar />
        <div className={classes.DashboardLayoutWrapper}>
          <div className={classes.DashboardLayoutContainer}>
            <div className={classes.DashboardLayoutContent}>{children}</div>
          </div>
        </div>
      </div>
    </Page>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
