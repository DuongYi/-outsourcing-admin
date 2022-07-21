import React from "react";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  OverviewCardRoot: {},
  Wrapper: {
    padding: theme.spacing(3),
    backgroundColor: "rgb(255, 255,255)",
    color: "rgb(33, 43, 54)",
    overflow: "hidden",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 20%) 0px 16px 32px -4px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontWeight: 550,
    lineHeight: 1.6,
    fontSize: "0.875rem",
    marginBottom: theme.spacing(2),
  },
  value: {
    margin: 0,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "1.7rem",
  },
}));

function OverviewCard({ title, value, type }) {
  const classes = useStyles();

  return (
    <Grid item md={3} xs={6} className={classes.OverviewCardRoot}>
      <div
        className={classes["Wrapper"]}
        style={{
          borderLeft: `4px solid ${type === "title" ? "#00b8d4" : "#f44336"}`,
        }}
      >
        <div>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.value}>{value}</Typography>
        </div>

        {type === "title" && (
          <div
            style={{
              opacity: 0.5,
            }}
          >
            <PeopleAltIcon />
          </div>
        )}
        {type === "price" && (
          <div
            style={{
              opacity: 0.5,
            }}
          >
            <AttachMoneyIcon />
          </div>
        )}
      </div>
    </Grid>
  );
}

OverviewCard.defaultProps = {
  title: "Thành viên",
  value: "75000 / 35487235",
  type: "price",
};

OverviewCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default OverviewCard;
